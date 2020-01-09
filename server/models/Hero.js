const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{ type: String },
    title:{type : String},  //皮肤名称
    avater:{type: String},  //ref id关联  更改之后 ,不用去修改数据库
    // categories:[{type: mongoose.SchemaTypes.ObjectId,ref: 'Category'}],
    // scores:{
    //     difficult:{type: Number},
    //     skills:{type: Number},
    //     attack:{type: Number},
    //     survive:{type: Number},
    // },
    // skills: [{
    //     icon: {type:String},
    //     name: {type:String},
    //     description: {type:String},
    //     tips:{type:String}
    // }],
    // // 顺风出装
    // items1: [{type: mongoose.SchemaTypes.ObjectId,ref='Item' }],
    // //逆风出装
    // items2: [{type: mongoose.SchemaTypes.ObjectId,ref='Item' }],

    // //使用技巧
    // usageTips:{type:String},
    // //对抗技巧
    // battleTips:{type:String},
    // //团战思路
    // teamTips:{type:String},
    // //最佳搭档
    // partners:[{
    //     hero:{type: mongoose.SchemaTypes.ObjectId,ref:'Hero'},
    //     deccription:{type: String},
    // }]
})
// 导出mongoose的模型
module.exports =mongoose.model('Hero',schema)