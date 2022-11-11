import express from 'express'
const router = express.Router()

//every single route will use logger middleware
router.use(logger)

//routes read top to bottom

router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.send('User New Form')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

//dynamic parameter urls
router.get('/:id', (req, res) => {
    console.log(req.user)
    res.send(`Get user with id ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send('This would be for a route to update')
})

router.delete('/:id', (req, res) => {
    res.send('This would be for a route to delete')
})

//We can also do some fun chaining to remove redundancy
router
    .route(':/id')
    .get((req, res) => {
        res.send(`Get user with id ${req.params.id}`)
    })
    .put((req, res) => {
        res.send('This would be for a route to update')
    })
    .delete((req, res) => {
        res.send('This would be for a route to delete')
    })

const users = [{ name: 'Kyle' }, { name: 'Sally' }]
//whenever you go to a route with an id parameter, run this code
//this is a type of middleware, stuff that runs between the request being sent and the response being returned to the user
//without next() it would infinetly load, because it would not go to the reponse functions above.
router.param('id', (req, res, next, id) => {
    // console.log(id)
    req.user = users[id]
    next()
})

//routes read top to bottom meaning
// router.get('/new', (req, res) => {
//     res.send('User New Form')
// })
//it would think /new would be an id, which is not what we want

//always put static routes above dynamic ones.

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

export default router
