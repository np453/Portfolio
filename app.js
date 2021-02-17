const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('bodyParser')
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const { connected } = require('process');
dotenv.config();


const PORT = 6972;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('client/build'))
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.get('*', (req,res) =>{
      res.sendFile(path.join(__dirname+'/client/build/index.html'));
    });

   mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser : true, useUnifiedTopology : true}, () => console.log("database connected")); 

  app.listen(PORT,()=>{
      console.log(`App running on ${PORT}`)
  }) 