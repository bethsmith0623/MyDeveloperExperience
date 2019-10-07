const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema ({
  username: String,
  Date: Date,
  Comment: String
  }, {
  timestamps: true
});


module.exports = mongoose.model('Comment', commentSchema);