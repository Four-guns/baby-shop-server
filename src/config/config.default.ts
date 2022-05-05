import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';

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
            host: process.env.MYSQL_HOST || 'localhost',
            port: process.env.MYSQL_PORT || 3306,
            username: process.env.MYSQL_USERNAME,
            password: process.env.MYSQL_PWD,
            database: process.env.MYSQL_DATABASE,
            synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
            logging: false,
        },
        // security: {
        //   csrf: false,
        // },
    } as MidwayConfig;
};
