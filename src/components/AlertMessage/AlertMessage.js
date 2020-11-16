import React from 'react';
import './AlertMessage.css';

function AlertMessage(props) {
  const { children } = props;
  return(
    <div className="alert" id="alert_startclick">
      <i className="arrow"></i>
      <span className="closebtn" 
        onClick={() => {
          document.getElementById("alert_startclick").style.display = "none";
        }}
      >&times;</span>
      <div className="message">{children}</div>
    </div>
  );
}

export default AlertMessage;