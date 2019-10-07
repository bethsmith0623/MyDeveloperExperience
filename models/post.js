const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
  title: String,
  date: Date,
  content: String,
  tags: [{
      type: Schema.Types.ObjectId,
      ref: 'Tag', 
      default: 'untagged'
  }]
  }, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);