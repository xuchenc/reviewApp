var mongoose = require('mongoose');

var ReviewSchema =  new mongoose.Schema({
  product: { type: String },
  image: { type: String },
  rating: { type: String },
  description: { type: String },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});
mongoose.model('Review', ReviewSchema);
