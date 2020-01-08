const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{ type: String } 
})
// 导出mongoose的模型
module.exports =mongoose.model('Category',schema)