import express from "express";
import { body } from "express-validator";   
import { registerUser, loginUser, userCredits } from "../controllers/userControllers.js";
import userMiddleware from "../middlewares/userMiddleware.js"; 

const router = express.Router();

router.post(
  "/register",
  [
    body("fullname").notEmpty().withMessage("Full name is required"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  ],
  registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  loginUser
);

router.post(
  "/credits",
  userMiddleware,
  userCredits
);

export default router;

// end point: /api/user/register
// end point: /api/user/login
// end point: /api/user/credits
