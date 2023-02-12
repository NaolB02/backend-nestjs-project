import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './database/typeorm.config';
import { LikeModule } from './like/like.module';
import { BuyModule } from './buy/buy.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    LikeModule,
    BuyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
