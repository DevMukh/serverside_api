const express = require("express");
const application = express();
const pinsroute=require('./router/pins')
const usersroute=require('./router/user')
const mongoose = require("mongoose");
const bodyParser=require('body-parser');
application.use(bodyParser.json());
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://admin:admin123@database.jnmg4od.mongodb.net/",  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connected successfully")
})
.catch((error) => {
    console.error(error);
});
application.use('/api/pins', pinsroute);
application.use('/api/user', usersroute);
application.listen(7800,()=>{
console.log("Port is ready and running..")
});




