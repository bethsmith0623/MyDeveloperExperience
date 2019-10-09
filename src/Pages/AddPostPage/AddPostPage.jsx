import React, {Component} from 'react';
import * as postAPI from '../../services/posts-api';

class AddPostPage extends Component {
  state = {
    title: "",
    date: "",
    content: "",
    tags: ""
  }
  
  handleSubmit = e => {
    console.log(e)
    e.preventDefault();
    this.props.handleAddPost(this.state);
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