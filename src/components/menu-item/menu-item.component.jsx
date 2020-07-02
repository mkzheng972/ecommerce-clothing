import React from 'react';
import { useHistory } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = (props) => {
  const { title, imageUrl, size, linkUrl } = props;
  const history = useHistory();
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(linkUrl)}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
