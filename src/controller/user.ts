import {
    Body,
    Controller,
    Get,
    Inject,
    Post,
    Query,
} from '@midwayjs/decorator';
import { UserService } from '../service/user';
import { LoginInfoDto } from '../swagger/user';

@Controller('/api/user')
export class HomeController {
    @Inject()
    userService: UserService;

    @Get('/')
    async home(@Query('name') name?: string) {
        return this.userService.getUser(name);
    }

    @Post('/login')
    async login(@Body() loginInfo: LoginInfoDto) {
        return this.userService.login(loginInfo.username, loginInfo.password);
    }

    @Post('/register')
    async register(@Body() loginInfo: LoginInfoDto) {
        return this.userService.registerUser(loginInfo.username);
    }
}
