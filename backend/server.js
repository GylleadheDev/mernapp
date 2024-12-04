import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import ProductRoutes from "./routes/routes.js";
import path from "path";
import cors from "cors";


const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());

const __dirname = path.resolve();

app.use("/api/products", ProductRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) =>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}


app.listen(3000 , () => {
    connectDB();
    console.log("Server is running on port 3000");
});


