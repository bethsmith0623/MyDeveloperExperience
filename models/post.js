const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const postSchema = new Schema ({
  title: String,
  date: Date,
  content: String,
  tags: { type: String, default: 'untagged'}
},{
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);