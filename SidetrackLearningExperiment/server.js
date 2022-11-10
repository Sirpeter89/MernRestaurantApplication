import express from 'express'
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('Hello World')
    //Can send status codes
    // res.sendStatus(500)
    //Can chain statuses
    // res.sendStatus(500).send("Internal server error encountered")
    // res.sendStatus(500).json({ message: "Error"})
    //you can even send downloads
    //res.download('path to file)
    //can render files
    res.render('index', { text: 'World' })
    // res.send('Hi')
})

app.listen(3000)
