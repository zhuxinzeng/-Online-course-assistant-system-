const mongoose=require ('mongoose') //引入Mongoose
const Schema= mongoose.Schema  //声明Schema
let ObjectId = Schema.Types.ObjectId //声明Object类型

const usercourseSchema = new Schema({
    ID:{
        unique:true,
        type:String 
    },
    usercourse:{
    type:ObjectId,
    ref:'Course'
    }
})