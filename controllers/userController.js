import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import GateUser from "../models/userGateModel.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; // Store in .env file

// User Registration
export const registerUser = async (req, res) => {
  try {
    const { userEmail, userNames, password, userRole } = req.body;

    // Check if user already exists
    const existingUser = await GateUser.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create New User
    const newUser = new GateUser({
      userEmail,
      userNames,
      password: hashedPassword,
      userRole,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// User Login
export const loginUser = async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    // Find User by Email
    const user = await GateUser.findOne({ userEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare Password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { userId: user._id, userRole: user.userRole },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
