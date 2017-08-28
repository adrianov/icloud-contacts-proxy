This app consumes apple_id and password and spits out json-array containing contacts
To start app do
```
node run.js
```
Typical request would be

```
curl -H "Content-Type: application/json" -d '{"apple_id":"niceguy@niceteam.ru", "password":"passwordhere"}' http://localhost:3002/
```
