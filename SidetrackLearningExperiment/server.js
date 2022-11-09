import express from 'express'
const app = express()

app.get('/', (req, res) => {
    console.log('Hello World')
    //Can send status codes
    // res.sendStatus(500)
    //Can chain statuses
    // res.sendStatus(500).send("Internal server error encountered")
    // res.sendStatus(500).json({ message: "Error"})
    res.send('Hi')
})

app.listen(3000)
