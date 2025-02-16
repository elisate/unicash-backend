import mongoose from "mongoose";

const { Schema, model } = mongoose;

const studentSchema = new Schema(
  {
    national_id: { type: String, required: false },
    studentName: { type: String, required: false },
    studentReg_num: { type: String, required: false },
    studentEmail: { type: String, required: true, unique: true },
    studentAccount: { type: String, required: true },
    studentLoan_status: { type: String, required: false },
    campusName: { type: String, required: false },
    images: { type: String, required: false },
    verificationToken: { type: String, required: false },
    tokenExpiry: { type: Date, required: false },
    isVerified: { type: Boolean, default: false }, // New field
  },
  {
    timestamps: true,
  }
);
const Student = model("Student", studentSchema);

export default Student;
