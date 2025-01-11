const User = require("../model/user");

const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const register = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const n = await User.countDocuments({ email: email }, { limit: 1 });
  if (n == 0) {
    bycrypt.hash(password, 10, function (err, hashedPass) {
      if (err) {
        res.status(500).json({ error: err });
      }
    });

    let user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      adresse: req.body.adresse,
      phone: req.body.phone,
      gender: req.body.gender,
      birthDate: req.body.birthDate,
      commandHistory: [],
      password: hashedPass,
    });
    user
      .save()
      .then((user) => {
        res
          .status(200)
          .json({ message: "user added successfully", uid: user.id });
      })
      .catch((error) => {
        res.status(500).json({
          message: "error occured",
        });
      });
  } else {
    res.status(403).json({
      message: "user already exist",
    });
  }
};

const login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      bycrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.json({
            error: err,
          });
        }
        if (user.ban) {
          return res.status(401).json({
            message: "user banned",
          });
        }
        if (result) {
          let token = jwt.sign({ email: user.email }, "secretValue", {
            expiresIn: "15m",
          });
          let refreshtoken = jwt.sign(
            { name: user.firstName },
            "refreshtokensecret",
            { expiresIn: "7d" }
          );
          // Calculate the expiration date of the token
          const expirationDate = new Date();
          expirationDate.setMinutes(expirationDate.getMinutes() + 15);

          res.status(200).json({
            message: "login successful",
            token,
            refreshtoken,
            tokenExpiration: moment(expirationDate).format(
              "YYYY-MM-DD HH:mm:ss"
            ),
            Uid: user._id,
          });
        } else {
          res.status(202).json({
            message: "password does not match!",
          });
        }
      });
    } else {
      res.status(404).json({
        message: "no user found",
      });
    }
  });
};

module.exports = { register, login };
