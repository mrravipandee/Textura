import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new user
    const newUser = new userModel({
      fullname,
      email,
      password: hashedPassword,
    });
    // Save user to database
    await newUser.save();
    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    // Respond with user data and token
    res.status(201).json({
      user: {
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        creditBalance: newUser.creditBalance,
      },
      token,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    // Respond with user data and token
    res.status(200).json({
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        creditBalance: user.creditBalance,
      },
      token,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const userCredits = async (req, res) => {
  const userId = req.user.id;

  try {
    // Find user by ID
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Respond with user's credit balance
    res.status(200).json({
      creditBalance: user.creditBalance,
      message: "User credits fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching user credits:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { registerUser, loginUser, userCredits };
