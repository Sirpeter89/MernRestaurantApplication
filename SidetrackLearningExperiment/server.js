import express from 'express'
import router from './routes/users.js'
const app = express()

//using middle ware to server static files
app.use(express.static('public'))
//allows us to process req body data
app.use(express.urlencoded({extended: true}))
//allows us to process json information from body in requests
app.use(express.json())

app.set('view engine', 'ejs')

//Middleware runs top to bottom, if we put this after the get request this wouldn't run when we access the index page
// app.use(logger)

app.get('/', logger, logger, logger, (req, res) => {
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

const userRouter = router

app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
