var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body: { type: String },
  // rating: { type: String }
});

mongoose.model('ReviewComments', CommentSchema);
