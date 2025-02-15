import Student from "../models/StudentModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sendEmail from "./sendemail.js"; // Import sendEmail function

dotenv.config();

// Utility function to generate JWT
// const generateJWT = (student) => {
//   return jwt.sign(
//     { _id: student._id, studentEmail: student.studentEmail },
//     process.env.JWT_SECRET,
//     { expiresIn: "1h" }
//   );
// };

// **Verify Student Token and Generate JWT**
// export const verifyToken = async (req, res) => {
//   try {
//     const { studentEmail, verificationToken } = req.body;

//     console.log(`Received request for: ${studentEmail}`); // Debug log

//     const student = await Student.findOne({ studentEmail });

//     if (!student || student.verificationToken !== verificationToken) {
//       console.log("Invalid token or student not found"); // Debug log
//       return res.status(400).json({ message: "Invalid token" });
//     }

//     // Check if token has expired
//     if (student.tokenExpiry && new Date(student.tokenExpiry).getTime() < Date.now()) {
//       console.log("Token expired"); // Debug log
//       return res.status(400).json({ message: "Token expired" });
//     }

//     // Generate JWT token
//     const jwtToken = jwt.sign(
//       { _id: student._id, studentEmail: student.studentEmail },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     console.log("Generated JWT:", jwtToken); // Debug log

//     // Send email notification to student
//     const emailSent = await sendEmail(
//       studentEmail,
//       "Login Successful",
//       `<p>Your authentication token is: <strong>${jwtToken}</strong></p>`
//     );

//     if (!emailSent) {
//       console.log("Failed to send email"); // Debug log
//       return res.status(500).json({ message: "Failed to send email" });
//     }

//     res.status(200).json({ message: "Login successful", token: jwtToken });
//   } catch (error) {
//     console.error("Error verifying token:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
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