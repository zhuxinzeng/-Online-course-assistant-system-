const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

//创建QuestionSchema

const QuestionSchema = new Schema({
   
    ques_id: ObjectId,
    Ques_id: String,
    ques_sequence: String,
    ques_title: String,
    options_list:[
        {
            Ques_id: String,
            options_id: String,
            options_title: String
        }
    ],
    userchoose:String,
    UserChoose: Array,
    correctquestion:String,
    Correctquestion:Array,
    
    

})
mongoose.model('Question',QuestionSchema)