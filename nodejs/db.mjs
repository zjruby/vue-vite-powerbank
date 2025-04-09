import { connect } from 'http2';
import mysql from 'mysql2/promise';
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '2628088247zj',
    database: 'demo'
});
async function connectToDatabase() {
    try {
        await connection.getConnection();
        console.log("连接成功");
    } catch (err) {
        console.log("失败:" + err);
        throw err;//抛出异常
    }
}
//查询
async function queryDatabase() {
    try {
        const sql = "SELECT * FROM user";
        const [results] = await connection.execute(sql);//异步
        console.log("查询成功");
        return results;
    } catch (error) {
        console.error("查询失败：", error);
        throw error;
    }
}
export {
    connectToDatabase,
    queryDatabase
};
// connection.connect(function (err) {
//     if (err) {
//         console.log("连接失败:" + err);
//         return;
//     }
//     console.log('数据库连接成功');
//     //连接成功查询
//     const sql = "SELECT * FROM user";
//     connection.query(sql,(error, results) => {
//         if(error){
//             console.error("失败:",error);
//         }else{
//             console.log("查询结果",results);
//         }
//     })
// });