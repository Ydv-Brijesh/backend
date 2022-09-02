const express = require('express');
const router = express.Router();
const Faculty = require('../Model/faculty')
const mongoose = require('mongoose');


router.get('/', (req, res, next) => {
    res.status(200).json({
        msg: 'this faculty get request'
    })
})
router.post('/', (req, res, next) => {
    const faculty = new Faculty({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        phone: req.body.phone,
        gender: req.body.gender,
        email: req.body.email,
    })

    faculty.save()
        .then(result => {
            console.log(faculty);
            res.status(200).json({
                newfaculty: result
            })
            console.log('result');
        })

        .catch(err => {
            console.log('err');
            res.faculty(500).json({
                error: err
            })
        })
})





module.exports = router;