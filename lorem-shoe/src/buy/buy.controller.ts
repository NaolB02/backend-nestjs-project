import { Body, Controller, Delete, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/database/entities/user/user.entity';
import { ExtractUser } from 'src/utils/extractUser.decorator';
import { BuyService } from './buy.service';

@Controller('buy')
@UseGuards(AuthGuard())
export class BuyController {

    constructor(private buyService: BuyService){}
    
    @Get()
    async findBuyProducts(@ExtractUser() user: User){
        return await this.buyService.findBoughtProduct(user);
    }


    @Post()
    async firstBuy(@ExtractUser() user: User, @Body() body){
        await this.buyService.firstBuy(user, body.productid);
    }

    @Patch()
    async buyAgain(@ExtractUser() user: User, @Body() body){
        await this.buyService.buyAgain(user, body.productid);
    }

    @Delete()
    async removeBoughtProduct(@ExtractUser() user: User, @Body() productid: number) { 
        this.buyService.removeBoughtProduct(user, productid);
    }
}