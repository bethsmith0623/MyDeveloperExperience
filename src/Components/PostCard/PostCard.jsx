import React from 'react';
import ("./PostCard.css");

function PostCard(props) {
  return(
    <div className="panel panel-default">
        {props.posts.map(post =>
        <>
        <div className="panel-heading">
          <h4 className="panel-title">{post.title}</h4>
          <p className="panel-tags"><small>{post.tags}</small></p>
        </div>
        <div>
          <p className="panel-body">{post.content}</p>
        </div>
        </>
        )}
    </div>
  )
}

export default PostCard; 