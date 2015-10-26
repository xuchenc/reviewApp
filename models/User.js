var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
  username: {required: true, unique: true, type: String, lowercase: true, trim: true},
  email: {required: true, unique: true, type:String, lowercase: true, trim: true},
  passwordHash: String,
  salt: String
});

UserSchema.methods.setPassword = function(password) {
  // console.log(password);
  this.salt = crypto.randomBytes(16).toString('hex');
  // console.log(this.salt);
	this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  // console.log(this.passwordHash);
};

UserSchema.methods.checkPassword = function(password) {
  var passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return (passwordHash === this.passwordHash);
};

UserSchema.methods.createToken = function() {
  return jwt.sign({
    _id: this._id,
    username: this.username,
    email: this.email
  }, "secret");
};

mongoose.model('User', UserSchema);
