import { Inject, Controller } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';

@Controller('/api1')
export class APIController {
    @Inject()
    ctx: Context;

    @Inject()
    userService: UserService;
}
