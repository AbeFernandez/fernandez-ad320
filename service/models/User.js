import mongoose from 'mongoose';
import { Deck } from './Deck';

const UserSchema = new mongoose.Schema({
    name: String,
    deck: [Deck.DeckSchema], // Allows us to create an array of cards objects
    size: Number,
})

export const User = mongoose.model('User', UserSchema)