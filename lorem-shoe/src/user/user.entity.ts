import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Entity()
@Unique(['username'])
export class User{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    username: string;
  
    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    photo: string;
    
    @Column()
    salt:string;

    async findPassword(password: string): Promise<boolean>{
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
}