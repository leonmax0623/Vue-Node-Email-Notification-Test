const express = require("express");
const cors = require("cors");
const data = require("./data/data.json");

const path = __dirname + "/views/";

const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.get("/", function (req, res) {
  res.sendFile(path + "index.html");
});

app.get("/settings", (req, res) => {
  res.status(200).json(data);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
