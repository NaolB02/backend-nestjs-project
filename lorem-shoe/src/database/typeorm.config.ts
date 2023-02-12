import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user/user.entity';
import { Product } from './entities/product/product.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'Lorem_Shoe',
  entities: [User, Product],
  synchronize: true,
};