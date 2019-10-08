const Post = require('../../models/post');

module.exports = {
  index, 
  show, 
  create,
  delete: deleteOne,
  update
};

asynch function index(req,res) {
  const posts = await Post.find({});
  res.status(200).json(posts);
}

async function show(req,res) {
  const post = await Post. findById(req.params.id);
  res.status(200).json(post);
}

async function create(req,res) {
  const post = await Post.create(req.body);
  res.status(201).json(post);
}

async function deleteOne(req,res) {
  const deletedPost = await Post.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedPost);
}

async function update(req,res) {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedPost);
}