const mongoose=require('mongoose');
const Schema= mongoose.Schema;

const DroneSchema= new Schema ({
  droneName : String,
  propellers: Number,
  maxSpeed: Number
});

const Drone =mongoose.model('Drone',DroneSchema);
//const Drone =mongoose.model('Drones',DroneSchema);
module.exports =Drone;
