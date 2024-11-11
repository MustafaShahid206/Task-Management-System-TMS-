import express from "express";
import dotenv from "dotenv";
// import bodyParser from "body-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// app.use(bodyParser({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});