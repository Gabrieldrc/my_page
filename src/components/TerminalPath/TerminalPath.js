import React from 'react';
import './TerminalPath.css';
import { useLocation } from 'react-router-dom'
import AlertMessage from '../AlertMessage/AlertMessage';

function TerminalPath() {
  const location = useLocation();
  return(
    <div className="terminal_path">
      <span style={{color: "#0EE109"}}>@GABRIELRODRIGUEZ</span>:
      <span style={{color: "#2FDAFF"}}>{location.pathname}</span>
      <div className="start_symbol">
        <span>$</span>
        <AlertMessage>Click "$"</AlertMessage>
      </div>
    </div>
  );
}

export default TerminalPath;