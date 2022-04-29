import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityModel('user')
export class User {
    @PrimaryGeneratedColumn()
    uid: number;

    @Column({
        length: 30,
    })
    uname: string;

    @Column({
        length: 30,
    })
    pwd: string;
}
