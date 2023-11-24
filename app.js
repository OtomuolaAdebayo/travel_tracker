const express = require('express')

const router = require('./routes/travelTracker');

const app = express()

const PORT = 5000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', router)

app.get('/', (req, res) => {
  res.send('Travel Tracker App')
})

app.listen(PORT, ()=> {
  console.log(`app is listening on port: ${PORT}`)
})