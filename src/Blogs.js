import React, { useState, useEffect } from 'react';
import Posts from './Posts';
function Blogs() {
  const [posts, getPosts] = useState([]);

  useEffect(() => {
    takeItems();
  }, []);
  const takeItems = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    // console.log(data);
    getPosts(data);
  };

  const blogStyles = {
    head: {
      textAlign: 'center'
    }
  };

  const customPosts = posts.filter(post => post.id > 49);

  return (
    <div className="blogs">
      <h1 style={blogStyles.head}>from Blogs</h1>
      {customPosts.map(post => (
        <Posts
          key={post.id}
          id={post.id}
          userId={post.userId}
          title={post.title}
        />
      ))}
    </div>
  );
}

export default Blogs;
