import { ApiProperty } from '@midwayjs/swagger';

export class LoginInfoDto {
    @ApiProperty({ example: 'admin', description: '用户名' })
    username: string;

    @ApiProperty({ example: '123', description: '密码' })
    password: string;
}
