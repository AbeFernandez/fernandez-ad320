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

//Get an individual card by id

app.get('/cards/:id', async (req, res) => {
    const card = await Deck.findOne({'card_id': req.params.id})
    if (card) {
        res.status(200).send(card)
    } else {
        res.sendStatus(404)
    }
})

//Get a deck by id

app.get('/decks/:id', async (req, res) => {
    const deck = await Deck.findOne({'_id': req.params.id})
    if (deck) {
        res.status(200).send(deck)
    } else {
        res.sendStatus(404)
    }
})

// Get All cards from a deck id

app.get('/decks/:id/cards', async (req, res) => {
    const limit = req.query.limit
    const deck = await Deck.findById(req.params.id)
    if (deck) {
        res.send(deck.cards.slice(0, 5))
    } else {
        res.sendStatus(404)
    }
})

app.post('/cards', async (req, res) => {
    const cardRequest = req.body  
    console.log('request body ', cardRequest)
    if (cardRequest.deckId) {
        const deck = await Deck.findById(cardRequest.deckId)
        if (deck) {
            deck.cards.push({
                frontImage: cardRequest.frontImage,
                frontText: cardRequest.frontText,
                backImage: cardRequest.backImage,
                backText: cardRequest.backText
            })
            deck.save()
        }
    }
    res.sendStatus(503)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})