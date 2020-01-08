//服务端代码
const express =require("express")

const app = express()

app.use(require('cors')())
app.use(express.json())
//数据库
require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(7980,()=>{
    console.log("http://localhost:7980 start")
})