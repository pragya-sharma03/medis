
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    //required: true
  },
  branch: {
    type: String,
<<<<<<< HEAD
    //required: true
  },
  rollno: {
    type: Number,
    //required: true
  },
  email: {
    type: String,
    //required: true
=======
   // required: true
  },
  rollno: {
    type: Number,
   // required: true
  },
  email: {
    type: String,
   // required: true
>>>>>>> 9f9a5878bdba5cd7851750796544112c8f7c4efc
  }
});
// const studentSchema = ({
//   name:String,//
//   branch:String,
//   rollno:Number,
//   mobileno:Number,
//   email:String,
//   DUAcd:String,
//   DUAcdAmt:Number,
//   DUHostel:String,
//   DUHostelAmt:Number
// });

const student = mongoose.model('student', studentSchema);

module.exports = student;
