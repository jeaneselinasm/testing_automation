if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const port = process.env.PORT || 3000
const express = require('express')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const cors = require('cors')
const router = require('./routes/index')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/', router)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})