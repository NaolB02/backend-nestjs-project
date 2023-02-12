import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/database/entities/user/user.entity';
import { ExtractUser } from 'src/utils/extractUser.decorator';
import { LikeService } from './like.service';

@Controller('like')
@UseGuards(AuthGuard())
export class LikeController {
    constructor(private likeService: LikeService){}
    @Get()
    async findLikedProducts(@ExtractUser() user: User){
        return await this.likeService.findLikedProduct(user);
    }

    @Post()
    async createNewLike(@ExtractUser() user: User, @Body() productid: number){
        await this.likeService.createNewLike(user, productid);
    }

    @Delete()
    async deleteLike(@ExtractUser() user: User, @Body() productid: number) {
        await this.likeService.deleteLike(user, productid);
    }


}
