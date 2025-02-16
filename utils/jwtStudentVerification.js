import Student from "../models/StudentModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sendEmail from "./sendemail.js"; // Import sendEmail function

dotenv.config();

const generateJWT = (student) => {
  return jwt.sign(
    { _id: student._id, studentEmail: student.studentEmail },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};
export const verifyStudent = async (req, res) => {
  try {
    const { studentEmail, verificationToken } = req.body;

    // Find student by email and check if verification token matches
    const student = await Student.findOne({ studentEmail });
    
    if (!student) {
      return res.status(400).json({ message: "Student not found" });
    }

    if (student.verificationToken !== verificationToken) {
      return res.status(400).json({ message: "Invalid verification token" });
    }

    // Check if token has expired
    if (new Date(student.tokenExpiry) < Date.now()) {
      return res.status(400).json({ message: "Verification token has expired" });
    }

    // Mark the student as verified
    student.isVerified = true;
    student.verificationToken = null; // Token is no longer needed after verification
    student.tokenExpiry = null; // Token expiry removed

    // Save the student to the database
    await student.save();

    // Generate JWT for the student
    const jwtToken = generateJWT(student);

    // Send the JWT to the student
    res.status(200).json({
      message: "Email verified successfully. You can now log in.",
      token: jwtToken, // Send the JWT token back
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};