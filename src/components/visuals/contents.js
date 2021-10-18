import './visuals.scss';
import { useState, setState } from 'react';

import Buttons from './buttons.js';
import InnerContent from './innerContent.js';
import Contact from './contact.js';

const Contents = (  ) => {
  const [showData, setShowData] = useState('resume');
  const [globalCurrent, setGlobalCurrent] = useState(0);

  const setData = ( dataType ) => {
    setShowData(dataType);
    console.log(typeof showData);
  }

  return (
    <div className="container p-0 d-flex">
      <div className="rectangle">
        <Buttons setData={setData} />
        <div className="contents d-flex justify-content-center">
          <div className="inner" id="inner">
            {showData != 'cntct' ? <InnerContent contents={showData}/> : <Contact />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;