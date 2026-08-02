const { signupUser,loginUser}=require("../services/auth.service");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const signup = asyncHandler(async (req, res) => {

    const user = await signupUser(req.body);

    return res.status(201).json(

        new ApiResponse(

            201,

            "User registered successfully.",

            user

        )

    );

});

const login = asyncHandler(async (req, res) => {

    const result = await loginUser(req.body);

    return res.status(200).json(

        new ApiResponse(

            200,

            "Login successful.",

            result

        )

    );

});

const getMe = asyncHandler(async (req, res) => {

    return res.status(200).json(

        new ApiResponse(

            200,

            "Current user fetched successfully.",

            req.user

        )

    );

});
module.exports = {
  signup,
  login,
  getMe,
};