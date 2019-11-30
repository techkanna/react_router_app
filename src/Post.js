import React, { useState, useEffect } from 'react';

const Post = ({ match }) => {
  const [postDetail, getPostDetails] = useState({});

  useEffect(() => {
    getItemDetail();
  }, []);

  const getItemDetail = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
    );
    const data = await res.json();
    getPostDetails(data);
  };

  const postStyles = {
    wrapper: {
      backgroundColor: '#466698',
      color: '#fff',
      padding: '2rem',
      width: '80%',
      margin: '5rem auto'
    }
  };

  if (postDetail === {}) {
    return <p>Loading postDetail...</p>;
  }

  return (
    <div style={postStyles.wrapper}>
      <p>
        <b>User Id </b>: {postDetail.id}
      </p>
      <p>
        <b>Post Body </b>: {postDetail.body}
      </p>
      <b> for confirmation: </b>
      <a
        href="https://jsonplaceholder.typicode.com/posts"
        rel="noopener noreferrer"
        target="_blank"
      >
        click me
      </a>
    </div>
  );
};

export default Post;
