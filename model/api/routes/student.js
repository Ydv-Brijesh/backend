const express = require('express');
const router = express.Router();
const Student = require('../Model/student');
const mongoose = require('mongoose');
const student = require('../Model/student');


router.get('/', (req, res, next) => {
    Student.find()
        .then(result => {
            res.status(200).json({
                studentData: result
            })
        })
        .catch(err => {
            console.log('err');
            res.status(500).json({
                error: err
            })
        })
})

// data find by id 

router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    Student.findById(req.params.id)
        .then(result => {
            res.status(200).json({
                student: result
            })
        })
        .catch(ree => {
            console.log(ree);
            res.status(500).json({
                error: err
            })
        })
})

router.post('/', (req, res, next) => {
    const student = new Student({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        phone: req.body.phone,
        gender: req.body.gender,
        email: req.body.email,
    })

    student.save()
        .then(result => {
            console.log('result');
            res.status(200).json({
                newStudent: result
            })
        })

        .catch(err => {
            console.log('err');
            res.student(500).json({
                error: err
            })
        })
})


// delete request


router.delete('/:id', (req, res, next) => {
    Student.remove({ _id: req.params.id })
        .then(result => {
            res.status(200).json({
                message: 'data deleted',
                result: result
            })
        })
        .catch(err => {
            console.log('err');
            res.student(500).json({
                error: err
            })
        })
})

// put request

router.put('/:id', (req, res, next) => {
    console.log(req.params.id);
    Student.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            name: req.body.name,
            phone: req.body.phone,
            gender: req.body.gender,
            email: req.body.email,
        }
    })
        .then(result => {
            res.status(200).json({
                updated_data: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                errer: err
            })
        })
})

module.exports = router;