const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  branch: {
    type: String,
  },
  rollno: {
    type: Number,
  },
  email: {
    type: String,
  },
  rollno: {
    type: Number,
  },
  email: {
    type: String,
  }
});
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
