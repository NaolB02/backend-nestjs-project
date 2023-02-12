import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product/product.entity';
import { User } from 'src/database/entities/user/user.entity';
import { UserLikes } from 'src/database/entities/userLikes/userLikes.entity';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class LikeService {
    constructor(
        @InjectRepository(UserLikes)
        private userLikesRepo: Repository<UserLikes>,

        @InjectRepository(Product)
        private productRepo: Repository<Product>

      ) {}

    async findLikedProduct(user: User){
        const userid = user.id;
        const findManyOptions: FindManyOptions<UserLikes> = {
            where: {
              userid,
            },
          };
      
        const userlikeslist = await this.userLikesRepo.find(findManyOptions);
        let products: Product[] = [];

        for (let userlike of userlikeslist){
            
            const productid = userlike.productid;
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
