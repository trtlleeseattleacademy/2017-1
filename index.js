const express = require('express')
const app = express()
const port = 1514
let counter = 0

app.get('/', (req, res) => res.send('Hello Trtl!'))

app.get('/counter', function (req, res) {
  res.send('counter' + counter);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))