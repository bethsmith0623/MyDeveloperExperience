const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const commentSchema = new Schema ({
  username: String,
  date: Date,
  comment: String
  }, {
  timestamps: true
});


module.exports = mongoose.model('Comment', commentSchema);