const express = require("express");
const router = express.Router();
const passport = require('passport')

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      handle: req.user.handle,
      email: req.user.email
    });
  })

module.exports = router;