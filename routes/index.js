let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

router.get('/about', (req, res) => {
  res.render('about.ejs');
});

router.get('/videos', (req, res) => {
  res.render('videos.ejs');
});

router.get('/contact', (req, res) =>{
  res.render('contact.ejs');
});

router.get('/resume', (req, res) => {
  res.render('resume.ejs');
});


module.exports = router;
