import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import * as bcrypt from 'bcrypt';
import { CheckUserDto } from 'src/dto/checkUser.dto';
import { JwtPayload } from 'src/jwt-files/jwtPayload.interface';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(userDetails: CreateUserDto){

    const newUser = this.userRepository.create({...userDetails});

    const password = userDetails.password;
    newUser.salt = await bcrypt.genSalt();
    newUser.password = await this.hashPassword(password, newUser.salt);
    console.log()

    try{
    await this.userRepository.save(newUser);
    } catch(error) {
     
      if (error.code === "ER_DUP_ENTRY"){
        throw new ConflictException('Username already exists');

      } else{
        throw new InternalServerErrorException();

      }
    }
    
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }

  async validateUserPassword(userDetails: CheckUserDto) {
    const username = userDetails.username;
    const password = userDetails.password;
    const findOneOptions: FindOneOptions<User> = {
      where: {
        username,
      },
    };

    const newUser = await this.userRepository.findOne(findOneOptions);

    if (newUser && await newUser.findPassword(password)) {
      return username;

    } else {
      return null

    }
  }

  async checkUser(userDetails: CheckUserDto) : Promise<{ accessToken: string}> {
    const username = await this.validateUserPassword(userDetails);

    if (!username) {
      throw new UnauthorizedException('Invalid Credentials')
    } 

    const payload: JwtPayload = { username }
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  }

  fetchUsers(){
    return this.userRepository.find()
  }
} 