"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractUser = void 0;
const decorators_1 = require("@nestjs/common/decorators");
exports.ExtractUser = (0, decorators_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
});
//# sourceMappingURL=extractUser.decorator.js.map