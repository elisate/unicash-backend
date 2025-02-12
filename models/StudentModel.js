
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const studentSchema = new Schema(
  {
    studentName: {
      type: String,
      required: false,
      
    },
    studentReg_num: {
      type: String,
      required: false,
     
    },
    studentEmail: {
        type: String,
        required: true,
      },
    studentLoan_status: {
      type: String,
      required: false,
    },
    
  },
  {
    timestamps: true,
  }
);

const Student = model("Student", studentSchema);

export default Student;
