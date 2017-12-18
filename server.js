var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
var data = [{
  temperature: "No weather data yet",
  dateTime: new Date()
}]

/* get the latest weather data */
app.get("/api/data", (req, res) => {
  console.log("Received new GET request");
  res.status(200).json(data[data.length-1]);
});

/* update the weather data */
app.post("/api/data", (req, res) => {
  console.log("Received new POST request");
  req.body.dateTime = new Date();
  data.push(req.body);
  res.status(200).json(req.body);
});

const port = process.env.PORT ? process.env.PORT : 8001;
const server = app.listen(port, () => {
  console.log("Server listening on port %s", port);
});