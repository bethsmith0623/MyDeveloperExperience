import React from 'react';
import ("./PostCard.css");

function PostCard({ post }) {
  return(
    <div className="panel panel-default">
      
        <div className="card">
        <div className="panel-heading">
          <h4 className="panel-title">{post && post.title}</h4>
          <p className="panel-tags"><small>{post && post.tags}</small></p>
          <hr />
        </div>
        <div>
          <p className="panel-body">{post && post.content}</p>
          <p className="panel-body"><small>~ BS</small></p>
        </div>
        </div>
       
    </div>
  )
}

export default PostCard; 