import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as postAPI from '../../services/posts-api';

class EditPostPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      invalidForm: false,
      formData: this.props
    };
  }

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdatePost(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  handleDeletePost = async id => {
    await postAPI.deleteOne(id);
    this.setState(state => ({
      posts: state.posts.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }

  render() {
    return (
      <>
        <h1>Edit Post</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              name="title"
              value={this.state.formData.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <input
              className="form-control"
              name="date"
              value={this.state.formData.date}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <input
              className="form-control"
              name="content"
              value={this.state.formData.content}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Tags</label>
            <input
              className="form-control"
              name="tags"
              value={this.state.formData.tags}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE POST
          </button>&nbsp;&nbsp;
          <Link to='/'>CANCEL</Link>
          <button
            className='btn btn-xs btn-danger margin-left-10'
            onClick={() => this.props.handleDeletePost(this.props.post._id)}
          >
            DELETE
          </button>
        </form>
      </>
    );
  }
}

export default EditPostPage;