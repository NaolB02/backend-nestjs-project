import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy, ExtractJwt} from 'passport-jwt';
import { User } from 'src/user/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { FindOneOptions } from 'typeorm';
import { JwtPayload } from './jwtPayload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor (
        @InjectRepository(User)
        private userRepo: UserRepository,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secret101',
        })
    }

    async validate(payload: JwtPayload) : Promise<User> {
        const username = payload.username;
        
        const findOneOptions: FindOneOptions<User> = {
            where: {
              username,
            },
          };

        const user = await this.userRepo.findOne(findOneOptions);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}