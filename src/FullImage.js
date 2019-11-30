import React, { useState, useEffect } from 'react';

const FullImage = ({ match }) => {
  const [fullImages, getFullImages] = useState({});

  useEffect(() => {
    const abc = new AbortController();
    const sig = abc.signal;

    fetch(`https://jsonplaceholder.typicode.com/photos/${match.params.id}`, {
      signal: sig
    })
      .then(res => res.json())
      .then(data => getFullImages(data));

    return function cleanup() {
      abc.abort();
    };
  }, []);

  // const takeImages = async () => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/photos/${match.params.id}`
  //   );
  //   const data = await res.json();
  //   getFullImages(data);
  // };

  const fullImagesStyles = {
    center: {
      textAlign: 'center',
      margin: '1rem 0 0 0'
    }
  };

  if (fullImages === {}) {
    return 'image is loading...';
  }
  return (
    <div style={fullImagesStyles.center}>
      <img src={fullImages.url} alt={fullImages.title} />
    </div>
  );
};

export default FullImage;
