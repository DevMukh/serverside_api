const router = require("express").Router();
const Pin = require("../models/Pin");
// creating a new pin and store into a database;
router.post("/", async (req, res) => {
  const candidatepin = new Pin(req.body);
  try {
    const SavePin = await candidatepin.save();
    res.status(200).json(SavePin);
    console.log("server working and save pin successfully");
  } catch (errors) {
    console.log("server disconnected not found data");
    res.status(404).json(errors);
  }
});
// get method to get pins
router.get("/",async(req,res)=>{
try{
const getPin=await Pin.find();
res.status(200).json(getPin);
console.log("Pins Matched Status 200okay");
}catch(error){
    res.status(404).json(error);
    console.log('Pins Not found Status 404')
}
})
module.exports=router;