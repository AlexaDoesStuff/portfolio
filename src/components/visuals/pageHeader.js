import { useState } from 'react';
import { useHistory } from "react-router-dom";

import './visuals.scss';

const PageHeader = ( props ) => {
  let name = props.name;
  return (
    <div className="page-header">
      <div className="head">
        <div className="title col-md-8">{name}</div>
        <div className="diagonal col-md-4"></div>
      </div>
    </div>
  );
};

export default PageHeader;