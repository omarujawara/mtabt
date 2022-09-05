const express = require('express')
const axios = require('axios')
const cors = require('cors')
const polygon = require('./constants')

const {polygon4 : polygn} = polygon

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

app.get('/', async (req, res) => {
    await axios.get(`https://www.waze.com/partnerhub-api/waze-feed-access-token/${polygn}?format=1`)
      .then(({data}) => {
        res.send(data)
      }).catch((err) => {
        console.log(err)
      });
})




app.listen(port, () => console.log(`Server started on port ${port}`))


