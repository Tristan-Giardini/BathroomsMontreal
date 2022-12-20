require("dotenv").config();
const { MONGO_URI } = process.env;
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
// const e = require("express");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);

const getBathrooms = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("MontrealBathrooms");
    const result = await db.collection("bathrooms").find().toArray();
    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    console.log(err.stack);
    res
      .status(400)
      .json({ status: 400, message: "Could not retrieve bathrooms" });
  }
  client.close();
};

const addBathroom = async (req, res) => {
  try {
    await client.connect();
    const { name, lng, lat, accessible, gendered } = req.body;
    const BathroomData = {
      _id: uuidv4(),
      name: name,
      lng: lng,
      lat: lat,
      accessible: accessible,
      gendered: gendered,
    };

    const db = client.db("MontrealBathrooms");

    const result = await db.collection("bathrooms").insertOne(BathroomData);

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    console.log(err.stack);
    res
      .status(400)
      .json({ status: 400, message: "Your entry couldn't be added" });
  }
  client.close();
};

const deleteBathrooms = async (req, res) => {
  try {
    await client.connect();
    const db = client.db("MontrealBathrooms");

    const result = await db.collection("bathrooms").deleteMany();

    res.status(200).json({ status: 200, data: result });
  } catch (err) {
    console.log(err.stack);
    res
      .status(400)
      .json({ status: 400, message: "Could not delete bathrooms" });
  }
};

module.exports = {
  getBathrooms,
  addBathroom,
  deleteBathrooms,
};
