import React from 'react';
import './AlertMessage.css';

function AlertMessage(props) {
  const { children } = props;
  return(
    <div className="alert" id="laert_startclick" onClick={() => {
      document.getElementById("laert_startclick").style.display = "none";
    }}>
      <i className="arrow"></i>
      <div className="message">{children}</div>
    </div>
  );
}

export default AlertMessage;