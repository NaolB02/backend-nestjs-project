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
exports.LikeController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const user_entity_1 = require("../database/entities/user/user.entity");
const extractUser_decorator_1 = require("../utils/extractUser.decorator");
const like_service_1 = require("./like.service");
let LikeController = class LikeController {
    constructor(likeService) {
        this.likeService = likeService;
    }
    async findLikedProducts(user) {
        return await this.likeService.findLikedProduct(user);
    }
    async createNewLike(user, body) {
        await this.likeService.createNewLike(user, body.productid);
    }
    async deleteLike(user, productid) {
        await this.likeService.deleteLike(user, productid);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, extractUser_decorator_1.ExtractUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "findLikedProducts", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, extractUser_decorator_1.ExtractUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "createNewLike", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, extractUser_decorator_1.ExtractUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "deleteLike", null);
LikeController = __decorate([
    (0, common_1.Controller)('like'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [like_service_1.LikeService])
], LikeController);
exports.LikeController = LikeController;
//# sourceMappingURL=like.controller.js.map