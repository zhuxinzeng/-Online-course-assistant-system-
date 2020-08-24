const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

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
mongoose.model('Question',QuestionSchema)