const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Objectid = Schema.Types.ObjectId;

//创建TestingSchema

const TestSchema = new Schema({
    Testid: Objectid,
    Checkname:String,
    Testname: String,
    Testsequence: String,
    Testtitle: String,
    Topictypes: String,
    Testscore: String,
    options_list: [{
        options_id: String,
        options_title: String

    }],

    correctanswer: String,
    answersgroup:[
        {
            answer:String
        }
    ]

})
mongoose.model('Test', TestSchema)