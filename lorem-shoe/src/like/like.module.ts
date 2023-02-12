import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Product } from 'src/database/entities/product/product.entity';
import { UserLikes } from 'src/database/entities/userLikes/userLikes.entity';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product, UserLikes]),
        AuthModule
    ],
    controllers: [LikeController],
    providers: [LikeService]
})
export class LikeModule {}
