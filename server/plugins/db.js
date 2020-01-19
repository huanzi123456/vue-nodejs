module.exports = app =>{
    
    const mongoose =require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba',{
        useNewUrlParser:true
    })

    //npm i require-all 插件使用   引用所有models下面的js
    require('require-all')( __dirname+'/../models')



}