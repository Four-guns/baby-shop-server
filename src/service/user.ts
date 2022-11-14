import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { User } from '../entity/user';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { randomUUID } from '@midwayjs/decorator/dist/util/uuid';

@Provide()
export class UserService {
    @InjectEntityModel(User)
    userModel: Repository<User>;

    /**
     * 查询单个用户
     * @param uname
     * @returns
     */
    async getUser(uname?: string) {
        return await this.userModel.find({
            where: uname
                ? {
                      uname,
                  }
                : {},
        });
    }

    /**
     * 登录
     * @param uname
     * @param pwd
     * @returns
     */
    async login(uname: string, pwd: string) {
        if (!(uname && pwd)) {
            return {
                status: 400,
                message: '用户名或密码为空',
                data: {},
            };
        }
        const user = await this.userModel.findOne({
            where: {
                uname,
                pwd,
            },
        });

        if (
            user &&
            (await bcrypt.compare(user.pwd, await bcrypt.hash(pwd, 10)))
        ) {
            // Create token
            const token = jwt.sign(
                { user_id: user.uid, user_name: uname },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
            );
            // save user token
            // user.token = token;
            // user
            return {
                data: {
                    token,
                },
                status: 200,
                message: 'success',
            };
        }
        return {
            status: 400,
            message: '用户名或密码填写有误',
        };
    }

    /**
     * 注册新用户
     * @param uname
     * @returns
     */
    registerUser = async (uname: string) => {
        if (!uname) {
            return {
                status: 400,
                message: '用户名为空',
                data: {},
            };
        }
        try {
            const tempUser = await this.userModel.findOne({
                where: {
                    uname,
                },
            });
            if (tempUser) {
                return {
                    status: 400,
                    message: '用户名不能重复',
                    data: {},
                };
            }
            const user = await this.userModel.insert({
                uid: randomUUID(),
                uname,
                pwd: '123456',
            });
            return {
                status: 200,
                message: 'successs',
                data: {
                    user: {
                        id: user.identifiers[0].uid,
                        password: '123456',
                    },
                },
            };
        } catch (error) {
            return {
                status: 400,
                message: error,
                data: {},
            };
        }
    };
}
