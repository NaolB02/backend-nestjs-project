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
exports.BuyController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const user_entity_1 = require("../database/entities/user/user.entity");
const extractUser_decorator_1 = require("../utils/extractUser.decorator");
const buy_service_1 = require("./buy.service");
let BuyController = class BuyController {
    constructor(buyService) {
        this.buyService = buyService;
    }
    async findBuyProducts(user) {
        return await this.buyService.findBoughtProduct(user);
    }
    async firstBuy(user, body) {
        await this.buyService.firstBuy(user, body.productid);
    }
    async buyAgain(user, body) {
        await this.buyService.buyAgain(user, body.productid);
    }
    async removeBoughtProduct(user, productid) {
        this.buyService.removeBoughtProduct(user, productid);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, extractUser_decorator_1.ExtractUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], BuyController.prototype, "findBuyProducts", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, extractUser_decorator_1.ExtractUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], BuyController.prototype, "firstBuy", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, extractUser_decorator_1.ExtractUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Object]),
    __metadata("design:returntype", Promise)
], BuyController.prototype, "buyAgain", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, extractUser_decorator_1.ExtractUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, Number]),
    __metadata("design:returntype", Promise)
], BuyController.prototype, "removeBoughtProduct", null);
BuyController = __decorate([
    (0, common_1.Controller)('buy'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:paramtypes", [buy_service_1.BuyService])
], BuyController);
exports.BuyController = BuyController;
//# sourceMappingURL=buy.controller.js.map