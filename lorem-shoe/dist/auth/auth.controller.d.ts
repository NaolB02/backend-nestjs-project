import { CheckUserDto } from 'src/dto/checkUser.dto';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    createUser(createUserDto: CreateUserDto): Promise<void>;
    checkUser(checkUserDto: CheckUserDto): Promise<{
        accessToken: string;
    }>;
}
