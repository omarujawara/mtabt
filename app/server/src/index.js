const express = require('express')
const axios = require('axios')
const cors = require('cors')
const polygon = require('./constants')


// const {polygon8 : polygn} = polygon

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3000

app.get('/:bridge', async (req, res) => {
    
    await axios.get(`https://www.waze.com/partnerhub-api/waze-feed-access-token/${polygon[req.params.bridge]}?format=1`)
      .then(({data}) => {
        console.log(req.params.bridge)
        res.send(data)
      }).catch((err) => {
        console.log(err)
      });
})




app.listen(port, () => console.log(`Server started on port ${port}`))


