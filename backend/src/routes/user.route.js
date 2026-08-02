const express = require("express");
const {
  getUsers,
  search,
} = require("../controllers/user.controller");
const router = express.Router();


const authMiddleware = require("../middleware/auth.middleware");



router.get("/", authMiddleware, getUsers);
router.get(
  "/search",
  authMiddleware,
  search
);

module.exports = router;





// const express = require("express");
// const router = express.Router();

// const authMiddleware = require("../middleware/auth.middleware");

// router.get("/", authMiddleware, (req, res) => {
//   res.json({
//     success: true,
//     user: req.user,
//   });
// });

// module.exports = router;



