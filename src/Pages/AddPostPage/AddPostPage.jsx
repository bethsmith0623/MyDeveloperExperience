import React, {Component} from 'react';
import * as postAPI from '../../services/posts-api';

class AddPostPage extends Component {

  handleAddPost = async newPostData => {
    const newPost = await postAPI.create(newPostData);
    this.setState(state => ({
      posts: [...state.posts, newPost]
    }), () => this.props.history.push('/'));
  }

  handleUpdatePost = async updatedPostData => {
    const updatedPost = await postAPI.update(updatedPostData);
    const newPostsArray = this.state.posts.map(p =>
      p._id === updatedPost._id ? updatedPost : p
    );
    this.setState(
      {posts: newPostsArray},
      () => this.props.history.push('/')
    );
  }

  handleDeletePost = async id => {
    await postAPI.deleteOne(id);
    this.setState(state => ({
      posts: state.posts.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleSubmit = e => {
    console.log(e)
    e.preventDefault();
    this.handleAddPost(this.state);
    // create(this.state).then(function() {
    //   window.location = "/"
    // });
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    return (
      <>
        <h4>Add Post</h4>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="add-form">
            <label>Title</label>
            <input type="text" name="title" value={this.props.title} onChange={this.handleChange}
              required
            />
          </div>
          <div className="add-form">
            <label>Date</label>
            <input type= "date" name="date" value={this.props.date} onChange={this.handleChange}/>
          </div>
          <div className="add-form">
            <label>Content</label>
            <textarea name="content" value={this.props.content} onChange={this.handleChange}
            required
            />
          </div>
          <div className="add-form">
            <label>Tags</label>
            <input
              type="text" name="tags" default="untagged" value={this.props.tags} onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn" onSubmit={this.handleSubmit}>
            ADD POST
          </button>
        </form>
      </>
    );
  }
}

export default AddPostPage;