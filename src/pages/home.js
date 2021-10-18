import React from 'react'

import StaticImages from '../components/visuals/images.js';
import Contents from '../components/visuals/contents.js';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="top">
          <div className="line"></div>
        </div>
        <div className="container">
          <div className="main-body">
            <div className="left">
              <div className="name">
                'Alexa Javellana
              </div>
              <div className="description-block">
                <div className="vert-line"></div>
                <div className="description">
                  A software engineer (front-end focus) that loves beautiful things. 
                  Let’s create new experiences in this digital world.
                </div>
              </div>
            </div>
            
            <div className="right">
              <Contents />
            </div>
          </div>
          <StaticImages />
        </div>

      </div>
    )
  }
}