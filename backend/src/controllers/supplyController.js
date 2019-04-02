import mongoose from 'mongoose'
import { SupplySchema } from '../models/supplyModel'

const Supply = mongoose.model('Supply', SupplySchema)

export const addNewSupply = (req, res) => {
    let newSupply = new Supply(req.body)
    newSupply.save((err, supply) => {
        if (err) {
            res.send(err)
        }
        res.json(supply)
    })
}

export const getSupply = (req, res) => {
    Supply.find({}, (err, supply) => {
        if (err) {
            res.send(err)
        }
        res.json(supply)
    })
}

export const getSupplyWithId = (req, res) => {
    Supply.findById(req.params.supplyId, (err, supply) => {
        if (err) {
            res.send(err)
        }
        res.json(supply)
    })
}

export const updateSupply = (req, res) => {
    Supply.findByIdAndUpdate({ _id: req.params.supplyId}, req.body, { new: true}, (err, supply) => {
        if (err) {
            res.send(err)
        }
        res.json(supply)
    })
}

export const deleteSupply = (req, res) => {
    Supply.remove({ _id: req.params.supplyId}, (err, supply) => {
        if (err) {
            res.send(err)
        }
        res.json({message: 'Successfully deleted supplier'})
    })
}