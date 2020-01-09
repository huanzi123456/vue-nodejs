//服务端代码
const express =require("express")

const app = express()

app.use(require('cors')())
app.use(express.json())
//静态文件托管 ,让文件夹里面的文件可以通过uploads来访问
app.use('/uploads',express.static(__dirname+'/uploads'))
//数据库
require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(7980,()=>{
    console.log("http://localhost:7980 start")
})