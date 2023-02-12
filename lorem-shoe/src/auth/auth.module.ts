import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { User } from 'src/user/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/jwt-files/jwt.strategy';


@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({defaultStrategy: 'jwt'}), 
        JwtModule.register({
            secret: 'secret101',
            signOptions:{
                expiresIn: 5400,
            },
    })
  ],
  controllers: [AuthController, JwtStrategy],
  providers: [AuthService],
  exports: [PassportModule]
})
export class AuthModule {}
