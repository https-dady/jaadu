const User = require("../models/User");

const signupUser = async (userData) => {
  const { fullName, email, password } = userData;

  // Check if email already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Create user
  const user = await User.create({
    fullName,
    email,
    password,
  });

  return user;
};

module.exports = {
  signupUser,
};