import envelope from '../../assets/icons/icons8-envelope-dots-60.png';
import github from '../../assets/icons/icons8-github-60.png';
import linkedin from '../../assets/icons/icons8-linkedin-60.png';

import { useState } from 'react';
import { useHistory } from "react-router-dom";

import './visuals.scss';

const ContactIcons = ( props ) => {
  const name = props.name;
  const [isHovering, setHover] = useState('');
  const [click, setClick] = useState('')

  let history = useHistory();

  return (
    <div className="contact-icons">
      <div className="line">
        <img src={envelope} className="icon-img"/> alexadoestuff@protonmail.com
      </div>
      <div className="line">
        <img src={github} className="icon-img"/> <a href="https://github.com/AlexaDoesStuff">@AlexaDoesStuff</a>
      </div>
      <div className="line">
        <img src={linkedin} className="icon-img"/> <a href="https://www.linkedin.com/in/alexa-j-2590ba96/">Alexa Javellana</a>
      </div>
    </div>
  );
};

export default ContactIcons;
