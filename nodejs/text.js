const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
//使用cors跨域
app.use(cors());
// 解析 JSON 格式的请求体
app.use(express.json());

//定义api
app.get('/', (req, res) => {
    res.json({message:'这是从后端获取的数据'})
});
app.listen(port, () => {
   console.log(`服务器运行在端口 ${port}`) 
})