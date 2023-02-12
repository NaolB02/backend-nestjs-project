import { Module } from '@nestjs/common';
import { BuyController } from './buy.controller';
import { BuyService } from './buy.service';

@Module({
  controllers: [BuyController],
  providers: [BuyService]
})
export class BuyModule {}
