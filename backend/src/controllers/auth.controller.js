const { signupUser } = require("../services/auth.service");

const signup = async (req, res) => {
  try {
    const user = await signupUser(req.body);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  signup,
};