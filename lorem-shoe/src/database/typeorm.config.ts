import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user/user.entity';
import { Product } from './entities/product/product.entity';
import { UserLikes } from './entities/userLikes/userLikes.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'lorem_shoe',
  entities: [User, Product, UserLikes],
  synchronize: true, 
};