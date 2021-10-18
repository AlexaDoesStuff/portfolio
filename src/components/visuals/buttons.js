import './visuals.scss';
import { useState } from 'react';

const Buttons = ( {setData} ) => {
  // Static set of three buttons
  return (
    <div className="buttons">
      <button className="selector" onClick={() => setData('resume')}>
        <span id="resume">resume</span>
      </button>
      <button className="selector" onClick={() => setData('vlntr')}>
        <span id="vlntr">vlntr</span>
      </button>
      <button className="selector" onClick={() => setData('cntct')}>
        <span id="cntct">cntct</span>
      </button>
    </div>
  );
};

export default Buttons;