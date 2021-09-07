import { useState } from 'react';
import { useHistory } from "react-router-dom";

import HomeButton from '../components/visuals/homebutton.js';
import PageHeader from '../components/visuals/pageHeader.js';

import './pages.scss';

const More = ( ) => {
  return (
    <div className="more">
      <PageHeader name={"more and contact"} />
      <HomeButton />
      <div className="more-content">
        Alexa Javellana is a young front-end engineer with a long way to go.
        As a cum laude graduate from <b>Marist College in 2019 with a Bachelor of Science in Computer Science</b>,
        having interned for companies such as <b>IBM and Disney's Marvel Entertainment, </b>
        with her first full-time career acting as a <b>leading Front End Engineer</b> for <b>Liferay's </b> 
        Tokyo Office, she is eager to learn more. Having created full-stack software for clients 
        such as the <b>Japanese Ministry of Defense, JP Post</b>, and other large public/private entities, 
        native in English and advanced in Japanese, she looks forward to the future ahead of her. < br /> < br/>

        On her days off she enjoys spending time with family and friends, <span className="art">Japanese nail art</span>, 
        knitting, dreaming of getting a puppy and procrastinating on starting tennis again.
      </div>
    </div>
  );
};

export default More;