import React, { useState } from 'react';
import './TerminalPath.css';
import { useLocation } from 'react-router-dom'
import AlertMessage from '../AlertMessage/AlertMessage';
import LoadLink from '../LoadLink/LoadLink';

function TerminalPath() {
  const location = useLocation();
  const [command, setCommand] = useState("");
  const onHoverFunction = (path) => {
    setCommand(`cd ${path}`)
  };
  return(
    <div className="terminal_path">
      <span style={{color: "#0EE109"}}>@GABRIELRODRIGUEZ</span>
      <span style={{color: "white"}}>:</span>
      <span style={{color: "rgb(47, 218, 255)"}}>{location.pathname}</span>
      <div className="nav_menu">
        <p>$ {command}</p>
        {function showAlert() {
          if (location.pathname === "/") {
            return<AlertMessage>Click "$" to navigate</AlertMessage>;
          }
        }()}
        <div className="nav_dropdown_content">
          <LoadLink href="/">Home</LoadLink>
          <LoadLink href="/a">About Me</LoadLink>
          <LoadLink href="/front_end">Front-End</LoadLink>
          <LoadLink href="/back_end">Back-End</LoadLink>
        </div>
      </div>
    </div>
  );
}

export default TerminalPath;