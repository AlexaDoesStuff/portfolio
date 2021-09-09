import React from 'react'

import Disc from '../components/visuals/disc.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discs: ['resume', 'volunteer', 'more'],
    }
    this.createDisc = this.createDisc.bind(this);
  }  

  createDisc = ( names ) => {
    var array = [];
    for(var i = 0; i < names.length; i++) {
      array.push(<Disc name={names[i]} />)
    }
    return array;
  }

  render() {
    return (
      <div className="home">
        <div className="window col-md-5">
          <div className="name-desc">
            <span id="name">
              <span id="first">Alexa</span> < br/>
              <span id="last">Javellana</span>
            </span>
            <p className="desc"> 
              A front-end engineer with a love for 
              beautiful things. Let’s create new 
              experiences in this digital world.
            </p>
          </div>
        </div>
        {/* <div className="contents">
          <div className="name-desc">
            <span id="name">
              <span id="first">Alexa</span> < br/>
              <span id="last">Javellana</span>
            </span>
            <p className="desc"> 
              A front-end engineer with a love for 
              beautiful things. Let’s create new 
              experiences in this digital world.
            </p>
          </div>
        </div> */}
        <div className="disc-container col col-md-6 float-md-end">
          {this.createDisc(this.state.discs)}
        </div>
      </div>
    )
  }
}