import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import HomeButton from '../components/visuals/homebutton.js';
import PageHeader from '../components/visuals/pageHeader.js';
import PageContent from '../components/visuals/pageContent.js';

import './pages.scss';

const Volunteer = ( ) => {
  return (
    <>
      <HomeButton />
      <div className="volunteer">
        <PageHeader name={"Volunteer"} />
        <div>
          <PageContent type="volunteer"/>
        </div>
      </div>
    </>
  );
};

export default Volunteer;