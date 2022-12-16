const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");

const { getBathrooms, addBathroom, deleteBathrooms } = require("./handlers");

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

app.get("/bathrooms", getBathrooms);
app.post("/add-bathroom", addBathroom);
app.delete("/delete-bathrooms", deleteBathrooms);

app.listen(8000, () => console.log("Listening on port 8000"));
