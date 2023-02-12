import { User } from 'src/database/entities/user/user.entity';
import { UserRepository } from 'src/database/entities/user/user.repository';
import { JwtPayload } from './jwtPayload.interface';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepo;
    constructor(userRepo: UserRepository);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
