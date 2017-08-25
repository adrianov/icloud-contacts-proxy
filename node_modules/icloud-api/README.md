# Motivation
This is an API for iCloud services.

# API : login
```
var client = new iCloud();
client.login({
  apple_id : "your_apple_id",
  password : password,
}, function(err) {
  if(err)
    throw "nope";

  client.saveSession("session.json");//for future usage
});

//or
client.loadSessionFile("session.json", function(err) {
  if(err)
    throw "try refreshing your credentials (session has expired)";
});

```

## API : contacts
```
// Fetch iCloud contacts
client.contact.fetchAll(function(err, contacts){
  //tada
});
```

## API : photo (&videos)

In this particular version photo support was dropped.
I didnt want to investigate it so I commented this piece out.
Original version of this npm can be found at https://github.com/131/icloud-api

# Notes
iCloud use well balanced GUID indexed JSON models for contacts & medias, so this API forward them unmodified (see examples above).

# Disclaimer
iCloud is a property of Apple and they might do whatever they want with it, anytime. Use this - unofficial - module accordingly.


# Credits
* 131
* https://github.com/matin/icloud/
* https://github.com/picklepete/pyicloud/
