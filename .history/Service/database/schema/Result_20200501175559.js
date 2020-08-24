const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Objectid = Schema.Types.ObjectId;

//创建TestingSchema

const ResultSchema = new Schema({
   
        studentid: String,
        name: String,
        examname: String,
        major: String,
        result: String,
        teacherid:{
            type:Objectid,
            ref:'Adminuser'
        }
})
mongoose.model('Result', ResultSchema)