import { Controller, Body, Get, ValidationPipe, Post, Req, UseGuards } from '@nestjs/common';
import { CheckUserDto } from 'src/dto/checkUser.dto';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('signup')
    createUser(@Body(ValidationPipe) createUserDto: CreateUserDto){
        console.log("asdfa");
        return this.authService.createUser(createUserDto);
    }

    @Post('login')
    checkUser(@Body(ValidationPipe) checkUserDto:CheckUserDto){
        return this.authService.checkUser(checkUserDto);
    }

}