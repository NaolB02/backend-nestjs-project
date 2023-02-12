import { Product } from 'src/database/entities/product/product.entity';
import { User } from 'src/database/entities/user/user.entity';
import { UserLikes } from 'src/database/entities/userLikes/userLikes.entity';
import { Repository } from 'typeorm';
export declare class LikeService {
    private userLikesRepo;
    private productRepo;
    constructor(userLikesRepo: Repository<UserLikes>, productRepo: Repository<Product>);
    findLikedProduct(user: User): Promise<Product[]>;
}
