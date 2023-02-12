import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class BoughtProducts{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    userid: number;
  
    @Column()
    productid: number;

    @Column()
    amount: number;

}