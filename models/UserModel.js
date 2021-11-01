
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const userSchema = new Schema({

    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type :String,
        required : true
    },
    email : 
    {
        type : String,
        required:true
    },
    password:
    {
        type:String,
        required:true
    },
    dateCreated :{
        type : Date,
        default : Date.now()
    }

});


userSchema.pre("save", async function(next){

    const salt =  await bcrypt.genSalt(10);

   const  hash = await bcrypt.hash(this.password, salt);

   this.password = hash;

   next();
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
