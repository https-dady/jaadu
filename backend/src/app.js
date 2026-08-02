const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middleware/error.middleware");
const userRoutes = require("./routes/user.route");
const chatRoutes = require("./routes/chat.route");
const messageRoutes = require("./routes/message.route");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);



// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
      success: true,
      message: "JAADU Backend is running 🚀",
    });
});
//Error Handler
app.use(errorHandler);

module.exports = app;