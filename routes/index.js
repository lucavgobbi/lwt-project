var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/contact', function (req, res) {
    res.status(200).json({ name: 'Luca Gobbi', email: 'me@lucavgobbi.com' });
});

router.get('/contact/:name/:email', function (req, res) {
    var name = req.params.name;
    var email = req.params.email;
    res.status(200).json({ name: name, email: email });
});

module.exports = router;
