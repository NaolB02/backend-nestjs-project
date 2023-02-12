import { ExecutionContext } from "@nestjs/common";
import { createParamDecorator } from "@nestjs/common/decorators"
import { User } from "src/user/user.entity"

export const ExtractUser = createParamDecorator((data, ctx: ExecutionContext) : User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
});

