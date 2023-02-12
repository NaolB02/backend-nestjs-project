"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const product_entity_1 = require("../database/entities/product/product.entity");
const userLikes_entity_1 = require("../database/entities/userLikes/userLikes.entity");
const like_controller_1 = require("./like.controller");
const like_service_1 = require("./like.service");
let LikeModule = class LikeModule {
};
LikeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([product_entity_1.Product, userLikes_entity_1.UserLikes]),
            auth_module_1.AuthModule
        ],
        controllers: [like_controller_1.LikeController],
        providers: [like_service_1.LikeService]
    })
], LikeModule);
exports.LikeModule = LikeModule;
//# sourceMappingURL=like.module.js.map