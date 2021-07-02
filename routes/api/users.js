const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys.js');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.post("/favorites", (req, res) => {

  User.findById(req.body.user_id).then(user => {
    const favorites = user.favorites
    
    favorites.push(req.body.favorite)
    user.save().then(savedUser => {
      res.json({
        savedUser,
        success: true
      })
    }).catch(saveErr => {
      res.status(500).json({
        success: false,
        user: saveErr
      })
    })
  }).catch(err => {
    res.status(500).json({user: err})
  })
});

router.delete("/favorites", (req, res) => {
  
  User.findById(req.body.user_id).then(user => {
    const favorites = user.favorites

    
    let index = favorites.findIndex(function(fav){
      return fav.place_id === req.body.place_id
    })
    
    favorites.splice(index, 1)
    
    user.save().then(savedUser => {
      res.json({
        savedUser,
        success: true
      })
    }).catch(err => {
      console.log(err)
    })
    // .catch(saveErr => {
    //   res.status(500).json({
    //     success: false,
    //     user: saveErr
    //   }).catch(err => {
    //     res.status(500).json({user: err})
    //   })
    // })

  });
});


router.post('/register', (req, res) => {
  
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
    return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        favorites: []
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, email: user.email, name: user.name, favorites: user.favorites };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token,
                  user: user
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "This user does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, name: user.name, email: user.email, favorites: user.favorites };

        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token,
            user: user
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;