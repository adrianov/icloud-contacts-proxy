var iCloud = require("icloud-api")
var client = new iCloud();

client.login({
  apple_id : "spankov@sinergo.ru",
  password : 'Tochter77',
}, function(err) {
  if(err)
    throw "nope";

  client.saveSession("session.json");//for future usage
});

client.contact.fetchAll(function(err, data){
  console.log('===================================');
  console.log(data.contacts[0]);
});
