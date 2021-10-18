import './visuals.scss';
import { useState, useEffect } from 'react';

const InnerContent = ( contents ) => {
  var content = contents.contents;
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);
  const [info, setInfo] = useState([]);

  var data = require('../../pages/content.json');

  useEffect(() => {
    var x = data.items;
    for(var i = 0; i < x.length; i++) {
      if(x[i].category == content) {
        setTotal(x[i].descriptions.length);
        setInfo(x[i].descriptions);
      }
    }
  });

  return (
    <div className="inner-content">
      <div className="flipper">
      <button 
          onClick={() => ((current == 0) ? setCurrent(info.length - 1) : setCurrent(current - 1))}
          className="back-btn">
          back
        </button>
        <button 
          onClick={() => (((current + 1) == info.length) ? setCurrent(0) : setCurrent(current + 1))}
          className="next-btn">
          next
          <div className="right-line"></div>
        </button>
      </div>

      {info[current] ? info[current].date : ''}
      {info[current] ? <div dangerouslySetInnerHTML={ {__html: info[current].title} }></div> : ''}
      {info[current] ? <b>{info[current].company}</b> : ''} < br/>
      <div className="duties">
        {info[current] ? info[current].duties.map(txt => <span>{txt}<br /></span>) : ''}
      </div>

      <div className="totals">
        {current + 1} / {total}
      </div>
    </div>
  );
};

export default InnerContent;