const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Objectid = Schema.Types.ObjectId;

const TaskSchema = new Schema({
    Taskname: String,
    Tasksequence: String,
    Tasktitle: String,
    Taskanswer: String,
    Studentanswer:String,
    Taskevaluate: String,
    Taskpublisher: String 

})
mongoose.model("Task",TaskSchema)