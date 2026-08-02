const {
  getAllUsers,
  searchUsers,
} = require("../services/user.service");

const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers(req.user.id);

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};




const search = async (req, res) => {
  try {
    const users = await searchUsers(
      req.query.q,
      req.user.id
    );

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getUsers,
  search,
};