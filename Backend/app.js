import express from "express";
import { config } from "dotenv";
import productsRouter from "./routes/products.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

config({
	path: "./data/config.env",
});

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: [process.env.FRONTEND_URL],
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

// Using routes
app.use("/api/v1/", productsRouter);

app.get("/", (req, res) => {
	res.send("Nice working");
});
