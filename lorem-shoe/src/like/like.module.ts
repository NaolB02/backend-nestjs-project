import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/database/entities/product/product.entity';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [LikeController],
    providers: [LikeService]
})
export class LikeModule {}
