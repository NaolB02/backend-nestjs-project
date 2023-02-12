"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../database/entities/product/product.entity");
const userLikes_entity_1 = require("../database/entities/userLikes/userLikes.entity");
const typeorm_2 = require("typeorm");
let LikeService = class LikeService {
    constructor(userLikesRepo, productRepo) {
        this.userLikesRepo = userLikesRepo;
        this.productRepo = productRepo;
    }
    async findLikedProduct(user) {
        const userid = user.id;
        const findManyOptions = {
            where: {
                userid,
            },
        };
        const userlikeslist = await this.userLikesRepo.find(findManyOptions);
        let products = [];
        for (let userlike of userlikeslist) {
            const productid = userlike.productid;
            const id = productid;
            const findOneOptions = {
                where: {
                    id,
                },
            };
            const reqProduct = await this.productRepo.findOne(findOneOptions);
            if (reqProduct) {
                products.push(reqProduct);
            }
        }
        return products;
    }
};
LikeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(userLikes_entity_1.UserLikes)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], LikeService);
exports.LikeService = LikeService;
//# sourceMappingURL=like.service.js.map