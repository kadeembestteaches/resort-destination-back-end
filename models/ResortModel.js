
const mongoose = require("mongoose");

const { Schema } = mongoose;

const resortSchema = new Schema({

    title : {
        type : String,
        required : true
    },
    description : {
        type :String,
        required : true
    },
    price : 
    {
        type : Number,
        required:true
    },
    imagePath:
    {
        type:String,
        required:true
    },
    featured:
    {
        type:Boolean,
        required : true
    },
    dateCreated :{
        type : Date,
        default : Date.now()
    }

});

const ResortModel = mongoose.model('Resort', resortSchema);

module.exports = ResortModel;
