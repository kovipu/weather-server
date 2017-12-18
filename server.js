var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
app.use(bodyParser.json());

// server static files from React app
app.use(express.static(path.join(__dirname, 'build')));

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
  if (req.body.temperature === undefined) {
    console.log("Invalid request!")
    res.status(400).json(req.body);
  } else {
    req.body.dateTime = new Date();
    data.push(req.body);
    res.status(200).json(req.body);
  }
});

/* the "catchall" for requests that don't match any others */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
})

const port = process.env.PORT ? process.env.PORT : 8001;
const server = app.listen(port, () => {
  console.log("Server listening on port %s", port);
});