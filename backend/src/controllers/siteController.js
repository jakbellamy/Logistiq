import mongoose from 'mongoose'
import {SiteSchema} from '../models/siteModel'

const Site = mongoose.model('Site', SiteSchema)

export const addNewSite = (req, res) => {
    let newSite = new Site(req.body)
    newSite.save((err, site) => {
        if (err) {
            res.send(err)
        }
        res.json(site)
    })
}

export const getSites = (req, res) => {
    Site.find({}, (err, site) => {
        if (err) {
            res.send(err)
        }
        res.json(site)
    })
}

export const getSiteWithID = (req, res) => {
    Site.findById(req.params.siteId, (err, site) => {
        if (err) {
            res.send(err)
        }
        res.json(site)
    })
}

export const updateSite = (req, res) => {
    Site.findByIdAndUpdate({ _id: req.params.siteId}, req.body, { new: true}, (err, site) => {
        if (err) {
            res.send(err)
        }
            res.json(site)
    })
}

export const deleteSite = (req, res) => {
    Site.remove({ _id: req.params.siteId}, (err, site) => {
        if (err) {
            res.send(err)
        }
        res.json({message: 'Successfully deleted site'})
    })
}
