const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");
const ApiError = require("../utils/ApiError");

const signupUser = async (userData) => {
  const { fullName, email, password } = userData;
  const normalizedEmail = email.toLowerCase().trim();

  // Validation of full geniun information during the login or signup
  if (!fullName || !email || !password) {

    throw new ApiError(

        400,

        "Full name, email and password are required."

    );

}


  // Check if email already exists
  const existingUser = await User.findOne({ email: normalizedEmail, });

  if (existingUser) {
    throw new ApiError(

    409,

    "Email already exists."

);
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
  const normalizedEmail = email.toLowerCase().trim();
  // Find user by email
  const user = await User.findOne({ email: normalizedEmail, });
if (!user) {

    throw new ApiError(

        401,

        "Invalid email or password."

    );

}

  // Compare password
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new ApiError(

    401,

    "Invalid email or password."

);
  }

  // Generate JWT
  if (!process.env.JWT_SECRET) {
    throw new ApiError(500, "JWT Secret is missing");
}
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