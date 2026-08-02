const User = require("../models/User");

const getAllUsers = async (currentUserId) => {
  const users = await User.find({
    _id: { $ne: currentUserId },
  }).select("-password");

  return users;
};
const searchUsers = async (searchTerm, currentUserId) => {
  const users = await User.find({
    _id: { $ne: currentUserId },
    fullName: {
      $regex: searchTerm,
      $options: "i",
    },
  }).select("-password");

  return users;
};

module.exports = {
  getAllUsers,
  searchUsers,
};