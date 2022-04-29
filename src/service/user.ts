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
}
