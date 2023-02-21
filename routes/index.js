var express = require("express");
var router = express.Router();
let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const onClick = () => {
  document.location.href = "/new";
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "mini message board",
    messages: messages,
    onClick: onClick,
  });
});
router.get("/new", function (req, res, next) {
  res.render("form", { title: "form", messages: messages });
});
router.post("/new", function (req, res) {
  messages.push({ name: req.body.author, text: req.body.messageTxt });
  res.redirect("/");
});

module.exports = router;
