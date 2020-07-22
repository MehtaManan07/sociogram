const User = require("../models/User");
const jwt = require("jsonwebtoken");
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

exports.login = async (req, res) => {
  const { email, password } = req.body;
  // check if user exist

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    //Compare the password
    const isMatch = await bcrypt.compare(password, user.password);

    //Check to see if there is a match
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    //Return jsonwebtoken
    jwt.sign(
        { _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: 36000000 },
      (err, token) => {
        if (err) {
          throw err;
        }
        res.json({ token, user });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
};
