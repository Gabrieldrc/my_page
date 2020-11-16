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
          <a href="/front_end" 
            className="nav_link" 
            id="nav_link_frontend" 
            key="nav_link_frontend"
            onFocus={() => {
              onHoverFunction("front_end/");
            }}
            >Front-End</a>
          <a href="/back_end" 
            className="nav_link" 
            id="nav_link_backend" 
            key="nav_link_backend"
            onFocus={() => {
              onHoverFunction("back_end/");
            }}
            >Back-End</a>
        </div>
      </div>
    </div>
  );
}

export default TerminalPath;