import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';


@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
  
    @Column()
    desc: string;

    @Column()
    shoeSize: string;

    @Column()
    placeMade: string;

    @Column()
    price: number;

    @Column()
    amountInStore: number;

    @Column()
    likes: number;

    @Column()
    photo: string;
    

}