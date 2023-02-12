import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class UserLikes{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    userid: number;
  
    @Column()
    productid: number;

}