const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // Use bcryptjs for simplicity and compatibility

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register User
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const user = await User.create({ email, password: hashedPassword });
    const token = generateToken(user._id);

    res.status(201).json({ user: { id: user._id, email }, token });
  } catch (error) {
    console.error("Error during user registration:", error); // Log error for debugging
    res.status(500).json({ message: "Server error" });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);
    res.status(200).json({ user: { id: user._id, email }, token });
  } catch (error) {
    console.error("Error during user login:", error); // Log error for debugging
    res.status(500).json({ message: "Server error" });
  }
};

// Logout function
const logoutUser = (req, res) => {
  // Clear the auth_token cookie by setting its expiration date to the past
  res.clearCookie("auth_token", { path: "/", httpOnly: true, secure: true });

  // Send response indicating the user has been logged out
  res.status(200).json({ message: "Logout successful" });
};

// Get User Information
const getUser = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: "Unauthorized. Token missing." });
  }

  try {
    // Verify token and get user id
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send user details excluding the password
    res.status(200).json({ id: user._id, email: user.email });
  } catch (error) {
    console.error("Error fetching user:", error); // Log error for debugging
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser, logoutUser, getUser };
