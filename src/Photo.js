import React from 'react';
import { Link } from 'react-router-dom';

const Photo = ({ title, thamburl, id, url }) => {
  const PhotoStyles = {
    center: {
      width: '50%',
      margin: '3rem auto 0 auto'
    }
  };
  return (
    <div style={PhotoStyles.center}>
      <h2>Title: {title}</h2>
      <h6>Id: {id}</h6>
      <Link to={`/profiles/${id}`}>
        {' '}
        <img src={thamburl} alt={title} />{' '}
      </Link>
    </div>
  );
};

export default Photo;
