var iCloud = require("icloud-api")
var client = new iCloud();
const express = require('express')
const bodyParser  = require("body-parser")
const app = express()
app.use(bodyParser.json());

app.post('/', function (req, res) {
  client.login({
    apple_id : req.body.apple_id,
    password : req.body.password,
  }, function(err) {
    debugger;
    if(err) {
      res.send('Cant fetch contacts');
    } else {
      client.contact.fetchAll(function(err, data){
        if(err) {
          res.send('Cannot fetch contacts');
        } else {
          res.send(data.contacts);
        }
      });
    }
  });
})

app.listen(3030, function () {
  console.log('Example app listening on port 3030!')
})
