require("dotenv").config();
var express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoute = require('./model/api/routes/student');
const facultyRoute = require('./model/api/routes/faculty');
const userRoute = require('./model/api/routes/user');
const countryRoute = require('./model/api/routes/country');
const stateRoute = require('./model/api/routes/state');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use('/faculty', facultyRoute);
app.use('/student', studentRoute);
app.use('/user', userRoute);
app.use('/country', countryRoute);
app.use('/state', stateRoute);


app.get('/', function (req, res) {
    res.send('Hello World!');
});





mongoose.connect('mongodb+srv://brijesh:brijesh3841@test.m36cqnc.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useNewUrlParser: true });
mongoose.connection.once('open', function () {
    console.log('Database connected Successfully');
}).on('error', function (err) {
    console.log('Error', err);
});

// mongoose.connection.on('error', err => {
//     console.log('connection error');
// });

// mongoose.connection.on('connected', connected => {
//     console.log('connected database...');
// });


app.use((req, res, next) => {
    res.status(404).json({
        error: 'roung request'
    })
})

app.listen(8000, function () {
    console.log('Listening to Port 8000');
});




