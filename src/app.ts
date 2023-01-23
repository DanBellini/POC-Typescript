import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import genericRouter from "./routes/route.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(genericRouter);

const port = process.env.PORT

app.listen(port, () => console.log(`Server running in port ${port}`))