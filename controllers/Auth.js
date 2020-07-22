const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({
      error: "User already exists",
    });
  }
  const newUser = new User({
    name,
    email,
    password,
  });

  const salt = await bcrypt.genSalt(10);

  newUser.password = await bcrypt.hash(password, salt);

  newUser.save((error, user) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Error while saving the user" });
    } else {
      res.status(200).json({ message: `New user created`, user });
    }
  });
};
