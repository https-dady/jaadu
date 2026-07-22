const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");

const signupUser = async (userData) => {
  const { fullName, email, password } = userData;

  // Check if email already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("Email already exists");
  }

const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });

  return user;
};

const loginUser = async ({ email, password }) => {
  // Find user by email
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Compare password
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Invalid email or password");
  }

  // Generate JWT
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  // Return user without password
  return {
    token,
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      profileImage: user.profileImage,
    },
  };
};
module.exports = {
  signupUser,
  loginUser,
};