import { useState } from 'react';
import { useHistory } from "react-router-dom";

import HomeButton from '../components/visuals/homebutton.js';
import PageHeader from '../components/visuals/pageHeader.js';
import PageContent from '../components/visuals/pageContent.js';

import './pages.scss';

const Resume = ( ) => {

  return (
    <>
    <HomeButton />
      <div className="resume">
        <div>
          <PageHeader name={"Resume"} />
        </div>
        <div>
          <PageContent type="resume"/>
        </div>
      </div>
    </>
  );
};

export default Resume;