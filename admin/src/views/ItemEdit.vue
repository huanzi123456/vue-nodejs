<template>
    <div>
        <h1>{{id?'编辑':'新增'}}物品</h1>
        <el-form  label-width="120px"  @submit.native.prevent="save" >
                <!-- <el-form-item label="上级分类">
                    <el-select v-model="model.parent">
                        <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id">
                        </el-option>
                    </el-select>
                </el-form-item> -->
                <el-form-item label="名称">
                    <el-input v-model = "model.name" placeholder="请输入内容"></el-input>
                </el-form-item>
                <el-form-item label="图标">
                    <el-upload
                        class="avatar-uploader"
                         :action= " $http.defaults.baseURL + '/upload'"
                        :show-file-list="false"
                        :on-success="afterUpload">  
                        <img v-if="model.icon" :src="model.icon" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button type = "primary" native-type ="submit">保存</el-button>
                </el-form-item>
            </el-form>
    </div>
</template>

<script>
export default {
    props: {
        id: {}
    },
    data(){
        return {
            model: {},
        }
    },
    methods:{
        afterUpload(res){
            //model一开始不存在,可以使用set语法显示赋值
            this.$set(this.model,'icon',res.url)
            // this.model.icon = res.url
        },
        async save(){
            //请求
            if (this.id) {
                 await this.$http.put(`rest/items/${this.id}`,this.model)
            }else{
                 await this.$http.post("rest/items",this.model)
            }
            //跳转到categorys
            this.$router.push(`/items/list`)
            this.$message({
                type: 'success',
                message: '保存成功'
            })
        },
        async fetch(){
            const res = await this.$http.get(`rest/items/${this.id}`)
            this.model =res.data
        },
    },
    created(){
        this.id && this.fetch()
    }
}
</script>>

<style >
  
</style>