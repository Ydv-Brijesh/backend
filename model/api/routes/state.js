const express = require('express');
const router = express.Router();
const State = require('../Model/state')
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {
    res.status(200).json({
        msg: 'this state get request'
    })
})

router.post('/', (req, res, next) => {
    const state = new State({
        state: req.body.state,
    })

    state.save()
        .then(result => {
            console.log(state);
            res.status(200).json({
                newstate: result
            })
            console.log('result');
        })

        .catch(err => {
            console.log('err');
            res.state(500).json({
                error: err
            })
        })
})

















module.exports = router;