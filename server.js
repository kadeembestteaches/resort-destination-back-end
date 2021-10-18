const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config({ path: 'config/keys.env' });


const ResortController = require("./controllers/ResortController.js");

const app = express();

const corsOptionsDelegate = function (req, callback) 
{
  const allowlist = ['http://localhost:3000', 'http://127.0.0.1:3000']
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

//middleware
app.use(cors(corsOptionsDelegate))

app.use(express.json());

app.use("/resorts",ResortController);


app.listen(process.env.PORT,()=>{
    console.log(`RESTful API is up and running on PoRT ${process.env.PORT}`);

    mongoose.connect(process.env.MONGODB_QUERY_STRING)
    .then(()=>{
        console.log(`Connected to MongoDB`)
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    })

})