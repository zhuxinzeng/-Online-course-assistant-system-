const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let objectId = Schema.Types.Objectid;

//创建QuestionSchema

const QuestionSchema = new Schema({
    ques_id: ObjectId,
    ques_sequence: String,
    ques_title: String,
    options_list:Array,
    userchoose:String,
    UserChoose: Array,
    correctquestion:String,
    Correctquestion:Array,
    
    

})