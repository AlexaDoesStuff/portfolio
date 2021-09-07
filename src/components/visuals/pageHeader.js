import { useState } from 'react';
import { useHistory } from "react-router-dom";

import './visuals.scss';

const PageHeader = ( props ) => {
  let name = props.name;
  return (
    <div className="page-header">
      <div className="head">
        <span className="title">{name}</span>
        <div className="diagonal"></div>
      </div>
    </div>
  );
};

export default PageHeader;