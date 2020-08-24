const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//创建TestingSchema

const TestSchema = new Schema({
    
    Checksequence:Number,
    Checkname:String,
    Checkscore:String,
    Checknumber:String,
    Testname: String,
    Testsequence: String,
    Testtitle: String,
    Topictypes: String,
    Testscore: String,
    options_list:Array,
    correctanswer: String,
    answersgroup:[
        {
            answer:String
        }
    ]

})
mongoose.model('Test', TestSchema)