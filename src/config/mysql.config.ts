require('dotenv').config('./env');
export const {
    MYSQL_USERNAME,
    MYSQL_PWD,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
} = process.env;

export default {
    MYSQL_USERNAME,
    MYSQL_PWD,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
};
