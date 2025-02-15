import express from "express";
import {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

// import { verifyToken} from "../utils/jwtStudent.js";

import {verifyStudent} from '../utils/jwtStudentVerification.js'

const studentRouter = express.Router();

studentRouter.post("/createStudent",createStudent);
studentRouter.post("/verify", verifyStudent);
studentRouter.get("/getStudents",getStudents);
studentRouter.get("/getStudentById/:id",getStudentById);
studentRouter.put("/updateStudent/:id",updateStudent);
studentRouter.delete("/deleteStudent/:id",deleteStudent);

export default studentRouter;
