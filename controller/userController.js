const user = require("../model/user");

//add user
const addUser = async (req, res) => {
  const newUser = new user(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getUserById = async (req, res) => {
  const uid = req.params.id;
  try {
    await user.findById(uid).then(async (u) => {
      if (u) {
        res.status(200).json(u);
      } else {
        res.status(404).json({ msg: "User not Found" });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const image = req.body.image;
  const email = req.body.email;
  const adresse = req.body.adresse;
  const gender = req.body.gender;
  const birthDate = req.body.birthDate;
  try {
    const user = await user.findByIdAndUpdate(
      id,
      {
        firstName: firstName,
        lastName: lastName,
        image: image,
        email: email,
        adresse: adresse,
        gender: gender,
        birthDate: birthDate,
      },
      { new: true }
    );
    if (!user) {
      res.status(404).json({ msg: "user not found" });
    } else {
      res.status(200).json({ msg: "user updated successfully", user });
    }
  } catch (err) {
    res.status(500).json({ msg: "user not updated", error: err.message });
  }
};

const updatePassword = async (req, res) => {
  const pwd = req.body.password;
  const uid = req.body.id;
  try {
    const user = await user.findByIdAndUpdate(uid, {
      pwd: password,
    });
    if (!user) {
      res.status(404).json({ msg: "user not found" });
    } else {
      res.status.json({ msg: "password updated successfully", user });
    }
  } catch (err) {
    res.status(500).json({ msg: "password not updated" });
  }
};

const updateUserImage = async (req, res) => {
  const image = req.body.image;
  const uid = req.body.id;
  try {
    const user = await user.findByIdAndUpdate(
      uid,
      {
        image: image,
      },
      { new: true }
    );
    if (!user) {
      res.status(404).json({ msg: "user not found" });
    } else {
      res.status.json({ msg: "image updated successfully", user });
    }
  } catch (err) {
    res.status(500).json({ msg: "image not updated" });
  }
};

module.exports = {
  addUser,
  getUserById,
  updateUser,
  updatePassword,
  updateUserImage,
};
