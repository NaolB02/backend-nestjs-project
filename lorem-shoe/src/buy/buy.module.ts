import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { BoughtProducts } from 'src/database/entities/boughtProducts/boughtProducts.entity';
import { Product } from 'src/database/entities/product/product.entity';
import { BuyController } from './buy.controller';
import { BuyService } from './buy.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, BoughtProducts]),
    AuthModule
],
  controllers: [BuyController],
  providers: [BuyService]
})
export class BuyModule {}
