import { useState } from 'react';
import { useHistory } from "react-router-dom";

import homeSvg from '../../assets/images/home200x200.png';

import './visuals.scss';

const HomeButton = ( ) => {
  let history = useHistory();
  return (
    <div className="home-button">
      <img 
        src={homeSvg} 
        id="icon"
        onClick={() => history.push('/')}
      />
    </div>
  );
};

export default HomeButton;