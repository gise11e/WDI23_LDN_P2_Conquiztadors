const Game   = require("../models/game");
const User   = require("../models/user");

const jwt    = require("jsonwebtoken");
const secret = require("../config/tokens").secret;



function register(req, res){
 User.create(req.body, (err, user) => {
   console.log(err);
   if (err) return res.status(500).json({ message: "Something went wrong.", err });
   let payload =  { _id: user._id, username:user.username };
   let token =  jwt.sign(payload, secret, {expiresIn: 60*60*24});
   return res.status(201).json({
     message: `Welcome ${user.username}!`,
     user,
     token
   });
 });

}

function userIndex(req, res) {
 User.find((err, users) => {
   if (err) return res.status(500).json({ success: false, message: err });
   if (!users) return res.status(500).json({ success: false, message: "No games found" });
   return res.status(200).json(users);
 });
}

function login(req, res){
   User.findOne({ email: req.body.email }, (err, user) => {
     if (err) return res.status(500).json({ message: "Something went wrong." });
     if (!user || !user.validatePassword(req.body.password)) {
       return res.status(401).json({ message: "Unauthorized. Invalid credentials, please try again.",  });
     }

     let payload =  { _id: user._id, username:user.username };
     let token =  jwt.sign(payload, secret, {expiresIn: 60*60*24});

     return res.status(200).json({
       message: "Welcome back.",
       user,
       token

     });
   });

}




module.exports = {
 register:  register,
 login:     login,
 index:     userIndex
};
