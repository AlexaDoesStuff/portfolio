import './visuals.scss';

import trifecta from '../../assets/images/trifecta.png';
import double from '../../assets/images/twostar.png';
import single from '../../assets/images/star.png';

const StaticImages = (  ) => {
  return (
    <div className="images">
      <img src={trifecta} id="trifecta" className="compound"/>
      <img src={double} id="double" className="compound"/>
      <img src={single} id="star"/>          
    </div>
  );
};

export default StaticImages;