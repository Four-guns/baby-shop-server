import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';
import {
    MYSQL_DATABASE,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_PWD,
    MYSQL_USERNAME,
} from './mysql.config';

export default (appInfo: MidwayAppInfo) => {
    return {
        // use for cookie sign key, should change to your own and keep security
        keys: appInfo.name + '_1651203854506_4112',
        egg: {
            port: 7001,
        },
        orm: {
            /**
             * 单数据库实例
             */
            type: 'mysql',
            host: MYSQL_HOST || 'localhost',
            port: MYSQL_PORT || 3306,
            username: MYSQL_USERNAME,
            password: MYSQL_PWD,
            database: MYSQL_DATABASE,
            synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
            logging: false,
        },
        // security: {
        //   csrf: false,
        // },
    } as MidwayConfig;
};
