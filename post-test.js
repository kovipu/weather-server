var request = require("request");

var requestData = {
  temperature: 800
};

request({
  url: "http://localhost:8001/api/data",
  method: "POST",
  json: requestData
}, (error, resp, body) => {
  console.log(body);
});
