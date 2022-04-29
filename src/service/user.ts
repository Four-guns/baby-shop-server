import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { InjectEntityModel } from '@midwayjs/orm';
import { User } from '../entity/user';
import { Repository } from 'typeorm';

@Provide()
export class UserService {
    @InjectEntityModel(User)
    userModel: Repository<User>;

    async getUser(options?: IUserOptions) {
        const allUsers = await this.userModel.find();
        return allUsers;
    }
}
