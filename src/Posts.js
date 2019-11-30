import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ userId, title, id }) => {
  const postStyle = {
    post: {
      width: '80%',
      margin: '0 auto',
      backgroundColor: '#fff',
      textAlign: 'center',
      marginBottom: '3rem',
      padding: '1rem'
    },
    fontStyle: {
      textDecoration: 'none'
    }
  };
  return (
    <div style={postStyle.post}>
      <h4> User Id : {userId}</h4>
      <h4>
        <Link style={postStyle.fontStyle} to={`/blogs/${id}`}>
          {' '}
          Post Title: {title}
        </Link>
      </h4>
    </div>
  );
};

export default Posts;
