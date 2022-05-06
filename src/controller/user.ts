import {
    Body,
    Controller,
    Get,
    Inject,
    Post,
    Query,
} from '@midwayjs/decorator';
import { UserService } from '../service/user';

@Controller('/api/user')
export class HomeController {
    @Inject()
    userService: UserService;

    @Get('/')
    async home(@Query('name') name?: string) {
        return this.userService.getUser(name);
    }

    @Post('/login')
    async login(
        @Body('username') username: string,
        @Body('password') password: string
    ) {
        return this.userService.login(username, password);
    }
}
