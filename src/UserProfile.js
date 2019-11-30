import React, { useState, useEffect } from 'react';
import Photo from './Photo';
const UserProfile = () => {
  const [photos, getPhotos] = useState([]);

  useEffect(() => {
    takePhotos();
  }, []);

  const takePhotos = async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/photos?albumId=1'
    );
    const data = await res.json();
    getPhotos(data);
  };

  if (photos === null) {
    return <p>Loading profile...</p>;
  }
  return (
    <div>
      {photos.map(photo => (
        <Photo
          key={photo.id}
          id={photo.id}
          thamburl={photo.thumbnailUrl}
          title={photo.title}
          url={photo.url}
        />
      ))}
    </div>
  );
};

export default UserProfile;
