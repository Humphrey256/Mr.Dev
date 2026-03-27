const express = require("express");
const cors = require("cors");
const healthRoutes = require("./routes/healthRoutes");

const app = express();

const allowedOrigins = [
	process.env.FRONTEND_URL,
	"http://localhost:8080",
	"http://127.0.0.1:8080",
].filter(Boolean);

const corsOptions = {
	origin(origin, callback) {
		// Allow server-to-server requests and tools that do not send Origin.
		if (!origin) {
			return callback(null, true);
		}

		if (allowedOrigins.includes(origin)) {
			return callback(null, true);
		}

		return callback(new Error("Not allowed by CORS"));
	},
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", healthRoutes);

module.exports = app;
