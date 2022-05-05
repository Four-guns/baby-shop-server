require('dotenv').config('./env');
const { MYSQL_USERNAME, MYSQL_PWD, MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE } =
    process.env;

module.exports = {
    MYSQL_USERNAME,
    MYSQL_PWD,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_DATABASE,
};
