import { connectToDatabase, queryDatabase } from './db.mjs';
connectToDatabase().then(() => {
    console.log('数据库连接测试完成');
})
    .catch((error) => {
        console.error('数据库连接测试出错:', error);
    });
import express from 'express';
import cors from 'cors';
const app = express();
const port = 3001;
//使用cors跨域
app.use(cors());
// 解析 JSON 格式的请求体
app.use(express.json());
//定义api
app.get('/', async (req, res) => {
    try {
        const users = await queryDatabase();
        res.json(users);
    } catch (error) {
        res.status(500).json({error:'查询是出错'});
    }
}
);
app.listen(port, () => {
    console.log(`服务器运行在端口 ${port}`)
})