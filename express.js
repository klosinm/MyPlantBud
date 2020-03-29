const express = require('express')
const app = express()
const port = 3000;


app.set('view engine', 'ejs');


app.get('/MyPlantBud', function (req, res) {
    res.render('mainscreen');
});


app.listen(port, () => console.log('On port!'))