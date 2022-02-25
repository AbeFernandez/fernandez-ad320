import mongoose from 'mongoose'

//Creating a schema
const CardsSchema = new mongoose.Schema({
    frontImage: String,
    frontText: String,
    backText: String,
    backText: String
})

const DeckSchema = new mongoose.Schema({
    name: String,
    cards: [CardsSchema], // Allows us to create an array of cards objects
    size: Number,
    userId: mongoose.Types.ObjectId
})

export const Deck = mongoose.model('Deck', DeckSchema)