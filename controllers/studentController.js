import Student from "../models/StudentModel.js";
import dotenv from "dotenv";
import sendEmail from "../utils/sendemail.js";

dotenv.config();

// Generate a 6-digit token
// Generate a 6-digit token
const generateVerificationToken = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// **CREATE a new student & send verification email**
export const createStudent = async (req, res) => {
  try {
    const { studentEmail, studentAccount, studentName } = req.body;

    // Check if student already exists
    const existingStudent = await Student.findOne({ studentEmail });
    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists" });
    }

    // Generate verification token
    const verificationToken = generateVerificationToken();
    const tokenExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry

    // Create new student (but not verified yet)
    const newStudent = new Student({
      ...req.body,
      verificationToken,
      tokenExpiry,
    });

    await newStudent.save();

    // Send verification email
    const verificationLink = `${process.env.CLIENT_URL}/verify/${verificationToken}`;
    const emailContent = `
      <h2>Hello ${studentName},</h2>
      <p>Thank you for registering. Please verify your email by clicking the link below:</p>
      
        <p><b>${verificationLink}</b></p>
      <p>This link expires in 10 minutes.</p>
    `;

    const emailSent = await sendEmail(studentEmail, "Email Verification", emailContent);

    if (!emailSent) {
      return res.status(500).json({ message: "Failed to send verification email" });
    }

    res.status(201).json({ message: "Student registered. Please check your email for verification." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// **VERIFY student email**



// **READ all students**
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// **READ a single student by ID**
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// **UPDATE student details**
export const updateStudent = async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student updated", student: updatedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// **DELETE a student**
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
