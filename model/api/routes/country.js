const express = require('express');
const router = express.Router();
const Country = require('../Model/country')
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {
    res.status(200).json({
        msg: 'this country get request'
    })
})

router.post('/', (req, res, next) => {
    const country = new Country({
        country: req.body.country,
    })

    country.save()
        .then(result => {
            console.log(country);
            res.status(200).json({
                newcountry: result
            })
            console.log('result');
        })

        .catch(err => {
            console.log('err');
            res.country(500).json({
                error: err
            })
        })
})

















module.exports = router;