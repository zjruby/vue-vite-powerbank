const { error } = require('console');
var mysql = require('mysql2')
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '2628088247zj',
    database: 'demo'
})
connection.connect(function (err) {
    if (err) {
        console.log("连接失败:" + err);
        return;
    }
    console.log('数据库连接成功');
    //连接成功查询
    const sql = "SELECT * FROM user";
    connection.query(sql,(error, results) => {
        if(error){
            console.error("失败:",error);
        }else{
            console.log("查询结果",results);
        }
    })
});
