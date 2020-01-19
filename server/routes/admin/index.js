module.exports =app =>{
    const express = require('express')
    const router = express.Router(
        {
            mergeParams:true //use 用到 require用到 合并url参数!
        }
    )
    router.post('/',async (req,res)=>{
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    router.put('/:id',async(req,res)=>{
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })

    router.get('/',async(req,res)=>{
        const queryOptions ={}
        if(req.Model.modelName === 'Category'){
            queryOptions.populate ='parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(100)
        res.send(items)
    })

    router.delete('/:id',async(req,res)=>{
        await req.Model.findByIdAndRemove(req.params.id,req.body)
        res.send({
            success: true
        })
    })
    router.get('/:id',async(req,res)=>{
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })

    app.use('/admin/api/rest/:resourse', async (req,res,next)=>{
        const modelName =  require('inflection').classify(req.params.resourse)
        req.Model = require(`../../models/${modelName}`)
        next()
    },router)

    const multer = require('multer')
    const upload =multer({dest: __dirname + '/../../uploads'})
    // 图片上传
    app.post('/admin/api/upload',upload.single('file'),async (req,res)=>{
        //处理用于上传文件的中间件 multer | npm i multer  注意需要在server里面安装
        //upload组件 将 file 赋值到 req
        const file = req.file
        file.url =`http://127.0.0.1:7980/uploads/${file.filename}`
        res.send(file)
    })
}