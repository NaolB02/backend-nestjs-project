import { User } from 'src/database/entities/user/user.entity';
import { BuyService } from './buy.service';
export declare class BuyController {
    private buyService;
    constructor(buyService: BuyService);
    findBuyProducts(user: User): Promise<import("../database/entities/product/product.entity").Product[]>;
    firstBuy(user: User, body: any): Promise<void>;
    buyAgain(user: User, body: any): Promise<void>;
    removeBoughtProduct(user: User, productid: number): Promise<void>;
}
