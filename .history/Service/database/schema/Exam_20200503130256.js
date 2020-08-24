const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
//创建ExamSchema
const ExamSchema = new Schema({
    examname: String,
    examtime: String,
    examscore: String,
    Topictypes: String,
    ques_number: Number,
    ques_sequence: String,
    ques_title: String,
    options_list: [{
        options_title_a: String,
        options_title_b: String,
        options_title_c: String,
        options_title_d: String
    }],
    correctanswer: String,

})

mongoose.model('Exam', ExamSchema)