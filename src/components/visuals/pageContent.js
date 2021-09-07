import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import './visuals.scss';

const PageContent = ( props ) => {
  const type = props.type;
  // const [data, setData] = useState('');
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);
  const [info, setInfo] = useState([]);

  var data = require('../../pages/content.json');

  useEffect(() => {
    var x = data.items;
    for(var i = 0; i < x.length; i++) {
      if(x[i].category == type) {
        setTotal(x[i].descriptions.length);
        setInfo(x[i].descriptions);
      }
    }
  });

  return (
    <div className="page-content">
      <div className="col-md-2 d-flex counter">
        <div className="curCount">{current + 1}</div>
        <div className="iterator">
        </div>
        <div className="totalCount">{total}</div>
      </div>
      <div className="information col-md-10">
        {info[current] ? info[current].date : ''}
        {info[current] ? <div dangerouslySetInnerHTML={ {__html: info[current].title} }></div> : ''} <br />
        {info[current] ? <b>{info[current].company}</b> : ''} <br /> <br />
        {info[current] ? info[current].duties.map(txt => <span>{txt}<br /></span>) : ''}
      </div>
      <div className="col-2"></div>
      <div className="buttons">
        <button 
          onClick={() => ((current == 0) ? setCurrent(info.length) : setCurrent(current - 1))}
          className="back-btn">
          <div className="left-line"></div>
          back
        </button>
        <button 
          onClick={() => (((current + 1) == info.length) ? setCurrent(0) : setCurrent(current + 1))}
          className="next-btn">
          next
          <div className="right-line"></div>
        </button>
      </div>
    </div>
  );
};

export default PageContent;
