import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { User } from '../entity/user';
import { Repository } from 'typeorm';

@Provide()
export class UserService {
    @InjectEntityModel(User)
    userModel: Repository<User>;

    async getUser(uname?: string) {
        return await this.userModel.find({
            where: uname
                ? {
                      uname,
                  }
                : {},
        });
    }

    async login(uname: string, pwd: string) {
        const result = await this.userModel.findOne({
            where: {
                uname,
                pwd,
            },
        });

        if (result) {
            return {
                data: result,
                status: 200,
                message: '登录成功',
            };
        }
        return {
            status: 400,
            message: '用户名或密码填写有误',
        };
    }
}
