import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product/product.entity';
import { User } from 'src/database/entities/user/user.entity';
import { UserBuy } from 'src/database/entities/buy/buy.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class BuyService {
    constructor(
        @InjectRepository(UserBuy)
        private userBuyRepo: Repository<UserBuy>,

        @InjectRepository(Product)
        private productRepo: Repository<Product>

      ) {}

    async findBuyedProduct(user: User){
        const userid = user.id;
        const findManyOptions: FindManyOptions<UserBuy> = {
            where: {
              userid,
            },
          };
      
        const userBuylist = await this.userBuyRepo.find(findManyOptions);
        let products: Product[] = [];

        for (let userbuy of userBuylist){
            
            const productid = userbuy.productid;
            const id = productid;
            const findOneOptions: FindOneOptions<Product> = {
                where: {
                  id,
                },
              };

            const reqProduct = await this.productRepo.findOne(findOneOptions);

            if (reqProduct){
                products.push(reqProduct);
            }
            
        }

        return products
        
    }
}
