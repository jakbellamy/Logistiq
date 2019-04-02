import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SupplySchema = new Schema({
    name: {
        type: String,
        required: "Enter name of supplier"
    },

    address: {
        street: {
            type: String,
            required: "Please enter supplier address street and number"
        },
        city: {
            type: String,
            required: "Please enter supplier address city"
        },
        state: {
            type: String,
            required: "Please enter supplier address 2-letter state code"
        },
        zipcode: {
            type: Number,
            required: "Please enter supplier address 5-digit zipcode"
        }
    },

    coordinates: {
        lat: { type: Number },
        lon: { type: Number }
    },

    cost: {
        per_mile: { type: Number },
        secondary_per_mile: { type: Number },
        initial: { type: Number },
        per_day: { type: Number },
        per_week: { type: Number },
        deposit: { type: Number }
    },

    contact: {
        email: { type: String },
        phone: { type: Number, min: 10, max: 11 },
    }
})
