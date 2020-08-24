const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
//创建SubjectSchema
const SubjectSchema = new Schema({
    examname:String,
    

})

mongoose.model('Subject',SubjectSchema)