import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class UserBuy{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    userid: number;
  
    @Column()
    productid: number;

}