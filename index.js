const express = require('express')
const path = require('path')
const app = express()
const port = 3000
app.use(express.static(path.join(__dirname, 'pages')))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(path.join(__dirname, 'about-aestiva'))
  })

  app.get('/about-doctor', (req, res) => {
    // res.send('Hello World!')
    res.sendFile(path.join(__dirname, '/plastic-surgeon-in-delhi'))
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})