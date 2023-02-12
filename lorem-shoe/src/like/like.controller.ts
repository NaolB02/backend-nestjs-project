import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/database/entities/user/user.entity';
import { ExtractUser } from 'src/utils/extractUser.decorator';
import { LikeService } from './like.service';

@Controller('like')
@UseGuards(AuthGuard())
export class LikeController {
    constructor(private likeService: LikeService){}
    @Get()
    findLikedProducts(@ExtractUser() user: User){
        return this.likeService.findLikedProduct(user);
    }
}
