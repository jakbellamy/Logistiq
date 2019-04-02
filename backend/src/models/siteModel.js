import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SiteSchema = new Schema({
    name: {
        type: String
    },

    coordinates: {
        lat: {
            type: Number,
            required: "Enter location's latitude"
        },
        lon: {
            type: Number,
            required: "Enter location's longitude"
        }
    },

    created_date: {
        type: Date,
        default: Date.now
    }
})
