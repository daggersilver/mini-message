var express = require('express');
var router = express.Router();

/* GET home page. */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Bye bye!",
    user: "Darwin",
    added: new Date()
  },
  {
    text: "Arigatou",
    user: "zeno",
    added: new Date()
  }
];

router.get('/', function(req, res) {
  res.render('index', { title: 'mini messageboard', messages: messages });
});

router.get("/new", function(req, res){
  res.render("form")
})

router.post("/new", function(req, res){
  messages.push({
    text: req.body.messageText,
    user: req.body.nameText,
    added: new Date()
  })
  res.redirect("/")
})

module.exports = router;
