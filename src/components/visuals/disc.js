import { useState } from 'react';

import './visuals.scss';

const Disc = ( props ) => {
  const name = props.name;
  const [isHovering, setHover] = useState('');
  const [click, setClick] = useState('')

  return (
    <div className="disc col-4">
      <div className={"circle" + click}
        onMouseEnter={() => setHover(' hover')}
        onMouseLeave={() => setHover('')}
        onClick={() => setClick(' clicked')}
      >
        <div className="inner"></div>
        <div className={"line" + isHovering}></div>
      </div>
      <div className={"name" + isHovering}>{name}</div>
    </div>
  );
};

export default Disc;