const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{ type: String },
    icon:{type: String},  //ref id关联  更改之后 ,不用去修改数据库
})
// 导出mongoose的模型
module.exports =mongoose.model('Item',schema)