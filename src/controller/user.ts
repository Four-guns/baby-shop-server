import { Controller, Get, Inject } from '@midwayjs/decorator';
import { UserService } from '../service/user';

@Controller('/api/user')
export class HomeController {
    @Inject()
    userService: UserService;

    @Get('/')
    async home() {
        return this.userService.getUser();
    }
}
