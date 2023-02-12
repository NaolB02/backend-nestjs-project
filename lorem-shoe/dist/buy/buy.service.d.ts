import { Product } from 'src/database/entities/product/product.entity';
import { User } from 'src/database/entities/user/user.entity';
import { BoughtProducts } from 'src/database/entities/boughtProducts/boughtProducts.entity';
import { Repository } from 'typeorm';
export declare class BuyService {
    private boughtProductsRepo;
    private productRepo;
    constructor(boughtProductsRepo: Repository<BoughtProducts>, productRepo: Repository<Product>);
    findBoughtProduct(user: User): Promise<Product[]>;
    firstBuy(user: User, productid: number): Promise<void>;
    buyAgain(user: User, productid: number): Promise<void>;
    removeBoughtProduct(user: User, productid: number): Promise<void>;
}
