import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product/product.entity';
import { User } from 'src/database/entities/user/user.entity';
import { BoughtProducts } from 'src/database/entities/boughtProducts/boughtProducts.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class BuyService {
    constructor(
        @InjectRepository(BoughtProducts)
        private boughtProductsRepo: Repository<BoughtProducts>,

        @InjectRepository(Product)
        private productRepo: Repository<Product>

      ) {}

    async findBoughtProduct(user: User){
        const userid = user.id;
        const findManyOptions: FindManyOptions<BoughtProducts> = {
            where: {
              userid,
            },
          };
      
        const boughtProductsList = await this.boughtProductsRepo.find(findManyOptions);
        let products: Product[] = [];

        for (let boughtProduct of boughtProductsList){
            
            const productid = boughtProduct.productid;
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

   async firstBuy(user: User, productid: number){
      const userid = user.id;
      
      let boughtProduct: BoughtProducts = {
        id: undefined,
        userid,
        productid,
        amount: 0
      };

      boughtProduct.productid = productid;
      boughtProduct.userid = userid;
      boughtProduct.amount = 1;

      this.boughtProductsRepo.save(boughtProduct);
      
  }

  async buyAgain(user: User, productid: number){
    const userid = user.id;

    const findOneOptions: FindOneOptions<BoughtProducts> = {
      where: {
          userid,
          productid,
        }
    }

    const boughtProduct = await this.boughtProductsRepo.findOne(findOneOptions);
    await this.boughtProductsRepo.delete(boughtProduct.id);

    boughtProduct.amount = boughtProduct.amount + 1
    await this.boughtProductsRepo.save(boughtProduct);

  }

  async removeBoughtProduct(user: User, productid: number){
      const userid = user.id;

      const findOneOptions: FindOneOptions<BoughtProducts> = {
          where: {
              userid,
              productid,
          }
      }

      const boughtProduct = await this.boughtProductsRepo.findOne(findOneOptions);
      await this.boughtProductsRepo.delete(boughtProduct.id);
      
  }

  
}
