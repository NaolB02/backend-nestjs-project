"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const user_entity_1 = require("./entities/user/user.entity");
const product_entity_1 = require("./entities/product/product.entity");
const userLikes_entity_1 = require("./entities/userLikes/userLikes.entity");
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'lorem_shoe',
    entities: [user_entity_1.User, product_entity_1.Product, userLikes_entity_1.UserLikes],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map