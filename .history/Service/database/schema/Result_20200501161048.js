const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Objectid = Schema.Types.ObjectId;

//创建TestingSchema

const ResultSchema = new Schema({
    name_list: [{
        
            name:String,
            studentid: String,
            major: String,
            result: String
       
    }]
})
mongoose.model('Result', ResultSchema)