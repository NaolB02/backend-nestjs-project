import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/database/entities/user/user.entity';
import { ExtractUser } from 'src/utils/extractUser.decorator';
import { BuyService } from './buy.service';

@Controller('buy')
@UseGuards(AuthGuard())
export class BuyController {
    constructor(private buyService: BuyService){}
    @Get()
    findBuyProducts(@ExtractUser() user: User){
        return this.buyService.findBuyedProduct(user);
    }


    // @Post()
    // createBuyProduct(){

    // }
}