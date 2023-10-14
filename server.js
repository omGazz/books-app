const path = require('path')
const express = require('express')

const app = express()

const port = process.env.PORT || 3000
//const publicDirectoryPath = path.join(__dirname, '../public')

//app.use(express.static(publicDirectoryPath))
app.use(express.static(path.join(__dirname, '.')));

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})