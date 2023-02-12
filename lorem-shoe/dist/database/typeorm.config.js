"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const user_entity_1 = require("../user/user.entity");
exports.typeOrmConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'Lorem_Shoe',
    entities: [user_entity_1.User],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map