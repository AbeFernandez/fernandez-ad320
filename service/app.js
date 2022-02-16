import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { Deck } from './models/Deck.js'

const app = express()
const port = 8000

// Connect to MongoDB
const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ycwbd.mongodb.net/notoriety?retryWrites=true&w=majority`
try {
    await mongoose.connect(connectionString)
}   catch (err) {
    console.log('error ', err)
}

// Middleware

const exampleMiddleware = (req, res, next) => {
    console.log('example middleware')
    next()
  }
  
app.use(cors())
app.use(express.json())
app.use(exampleMiddleware)

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.get('/decks/:id/cards', async (req, res) => {
    console.log('request id', req.params.id)
    const deck = await Deck.findById()
    console.log(deck.cards.length)
    res.sendStatus(503)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})