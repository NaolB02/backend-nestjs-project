import { CreateUserDto } from 'src/dto/createUser.dto';
import { Repository } from 'typeorm';
import { User } from 'src/database/entities/user/user.entity';
import { CheckUserDto } from 'src/dto/checkUser.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    createUser(userDetails: CreateUserDto): Promise<void>;
    private hashPassword;
    validateUserPassword(userDetails: CheckUserDto): Promise<string>;
    checkUser(userDetails: CheckUserDto): Promise<{
        accessToken: string;
    }>;
    fetchUsers(): Promise<User[]>;
}
