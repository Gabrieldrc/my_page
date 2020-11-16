import React, { useState } from 'react';
import './TerminalPath.css';
import { useLocation } from 'react-router-dom'
import AlertMessage from '../AlertMessage/AlertMessage';

function TerminalPath() {
  const location = useLocation();
  const [command, setCommand] = useState("");
  const onHoverFunction = (path) => {
    setCommand(`cd ${path}`)
  };
  return(
    <div className="terminal_path">
      <span style={{color: "#0EE109"}}>@GABRIELRODRIGUEZ</span>:
      <span style={{color: "#2FDAFF"}}>{location.pathname}</span>
      <div className="nav_menu">
        <p>$ {command}</p>
        {function showAlert() {
          if (location.pathname === "/") {
            return<AlertMessage>Click "$"</AlertMessage>;
          }
        }()}
        <div className="nav_dropdown_content">
          <a href="/a" 
            className="nav_link" 
            id="nav_link_aboutme" 
            key="nav_link_aboutme" 
            onFocus={() => {
              onHoverFunction("a/");
            }}
            >About Me</a>
          <a href="/" 
            className="nav_link" 
            key="nav_link_fontend"
            >Front-End</a>
          <a href="/" 
            className="nav_link" 
            key="nav_link_backend"
            >Back-End</a>
        </div>
      </div>
    </div>
  );
}

export default TerminalPath;