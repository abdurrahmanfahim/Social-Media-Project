const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../helpers/validation");
const User = require("../models/userModel");
const { jwtTokenGenerator } = require("../helpers/token");
const { sendVerifyEmail } = require("../helpers/mailer");

exports.newUserController = async (req, res) => {
  try {
    const {
      fName,
      lName,
      email,
      password,
      birthDay,
      birthMonth,
      birthYear,
      gender,
      isVerified,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "Invalid Email Address!",
      });
    }

    const checkMail = await User.findOne({ email });

    if (checkMail) {
      return res.status(400).json({
        message: `Email: ${email} is Already Exist!`,
      });
    }

    if (!validateLength(fName, 3, 15)) {
      return res.status(400).json({
        message: "First Name Should be minimum 3 and maximum 15 characters!",
      });
    }
    if (!validateLength(lName, 3, 15)) {
      return res.status(400).json({
        message: "Last Name Should be minimum 3 and maximum 15 characters!",
      });
    }
    if (!validateLength(password, 6, 30)) {
      return res.status(400).json({
        message: "Password Should be minimum 6 and maximum 30 characters!",
      });
    }

    // bcrypt password
    const hashed = await bcrypt.hash(password, 12);

    // validate username
    let tempUsername = fName.toLowerCase() + lName.toLowerCase();

    let finalUserName = await validateUsername(tempUsername);
    console.log(tempUsername, finalUserName);

    const user = await new User({
      fName,
      lName,
      username: finalUserName,
      email,
      password: hashed,
      birthDay,
      birthMonth,
      birthYear,
      gender,
      isVerified,
    }).save();

    const verifyToken = jwtTokenGenerator({ id: user._id.toString() }, "30m");
    const url = `http://localhost:8000/api/v1/auth/activate/${verifyToken}`;

    sendVerifyEmail(user.email, user.fName, url);

    const accessToken = jwtTokenGenerator({ id: user._id.toString() }, "7d");

    res.send({
      id: user._id,
      username: user.username,
      profilePicture: user.profilePicture,
      fName: user.fName,
      lName: user.lName,
      accessToken,
      isVerified: user.isVerified,
      message:
        "Registration Successful, Please check your Email for Activate your Account!",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Can not create user!",
    });
  }
};

// verify user

exports.verifyUserController = async (req, res) => {
  try {
    const { token } = req.params;
    console.log(token);

    const user = jwt.verify(token, process.env.JWT_SECRET);

    const check = await User.findById(user.id);
    if (check.isVerified) {
      res.status(400).send({
        message: "This email is Already verified!",
      });
    }

    await User.findByIdAndUpdate(user.id, { isVerified: true });

    res.status(200).send({
      message: "Account has been Activated Successfully!",
    });

  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};


exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).send({
        message: 'This is not a Registered email. Please Register First!'
      })
    }

    console.log(user.email)
    console.log(password, user.password)

    const passwordMatched = await bcrypt.compare(password, user.password)
    if (!passwordMatched) {
        return res.status(401).send({
        message: 'Invalid Credentials. Please try again!'
      })
    }

    const accessToken = jwtTokenGenerator({ id: user._id.toString() }, "7d");

    res.send({
      id: user._id,
      username: user.username,
      profilePicture: user.profilePicture,
      username: user.username,
      fName: user.fName,
      lName: user.lName,
      accessToken,
      isVerified: user.isVerified,
      message:
        "Login Successful!",
    });

  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
}
















