import './visuals.scss';
import { useState } from 'react';

import github from '../../assets/icons/icons8-github-96.png';
import linkedin from '../../assets/icons/icons8-linkedin-96.png';

const Contact = ( {setData} ) => {
  // Static set of three buttons
  return (
    <div className="contact d-flex flex-col">
      <div className="contact contents">
        Email: <a href="mailto:ajavellana123@gmail.com">Preferred</a>, <a href="mailto:alexadoestuff@protonmail.com">Second</a> <br/>  
        Feel free to contact me via email for any job opportunities, 
        freelance work and whatever else you think would be cool.
        <div className="icons">
          <a href="https://github.com/AlexaDoesStuff"><img src={github} className="icon-img"/></a>
          <a href="https://www.linkedin.com/in/alexa-j-2590ba96/"><img src={linkedin} className="icon-img"/></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;