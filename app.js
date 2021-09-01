const express = require('express')
const app = express()
require('dotenv').config();

app.use( express.static('public') )

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/home', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

 
app.listen(process.env.PORT)