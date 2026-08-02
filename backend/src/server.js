require("dotenv").config();
const http = require("http");
const {Server }= require("socket.io");


const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const startServer = async ()=>{
    await connectDB();

    // Express App-> HTTP Server
    const server = http.createServer(app);

    //  Socket.IO attach
    const io = new Server(server, {
      cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });

    // Test Connection
     io.on("connection", (socket) => {

        console.log("🟢 User Connected:", socket.id);

        socket.on("disconnect", () => {
            console.log("🔴 User Disconnected:", socket.id);
        });

    });
server.listen(PORT, () => {

  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
};

// console.log(process.env.MONGODB_URI)
startServer();
