import { Controller, Get, Inject, Query } from '@midwayjs/decorator';
import { UserService } from '../service/user';

@Controller('/api/user')
export class HomeController {
    @Inject()
    userService: UserService;

    @Get('/')
    async home(@Query('name') name?: string) {
        return this.userService.getUser(name);
    }
}
