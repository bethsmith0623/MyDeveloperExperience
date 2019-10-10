import React from 'react';
import ("./PostCard.css");

function PostCard(props) {
  console.log('postcard', props)
  return(
    <div className="">
        {/* {props.posts.map(post => */}
        <div>
          <h5>Card Name</h5>
          {/* title={post.title}
          date={post.date}
          content={post.content}
          tags={post.tags} */}
        </div>

        )}
    </div>
  )
}

export default PostCard; 