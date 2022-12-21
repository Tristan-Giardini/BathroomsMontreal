const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");

const {
  getBathrooms,
  addBathroom,
  updateBathroom,
  deleteAllBathrooms,
  deleteBathroom,
} = require("./handlers");

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

app.get("/bathrooms", getBathrooms);
app.post("/add-bathroom", addBathroom);
app.patch("/update-bathroom", updateBathroom);
app.delete("/delete-all-bathrooms", deleteAllBathrooms);
app.delete("/delete-bathroom/:_id", deleteBathroom);

app.listen(8000, () => console.log("Listening on port 8000"));
