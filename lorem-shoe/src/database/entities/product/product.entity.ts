import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';


@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
  
    @Column()
    details: object;

    @Column()
    price: number;

    @Column()
    amountInStore: number;

    @Column()
    likes: number;

    @Column()
    photo: string;
    

}