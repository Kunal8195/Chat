const express = require('express');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./db')
app.get('/', (req, res) => {
	res.send('OK');
})

app.post('/addMessage', (req, res) => {
	console.log("requestedURL", req.url, req.body)
	res.send("ok message added");
})

app.listen(4001);