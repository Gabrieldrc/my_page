import React, { useState } from 'react';
import './LoadLink.css';
import { Redirect } from 'react-router-dom'

function LoadLink(props) {
  const [widthState, setWithState] = useState(0);
  const { children, href } = props;
  let i = 0;
  let loadLinkStyle = {
    position: "absolute",
    top: "0",
    left: "50",
    width: widthState + "%",
    backgroundColor: "rgb(255, 99, 71)",
    height: "inherit",
    zIndex: "2",
  };
  function loadEffect() {
    if (i === 0) {
      i = 1;
      let width = 1;
      let id = setInterval(() => {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          setWithState(0);
        } else {
          width++;
          setWithState(width);
        }
      }, 10);
    }
  }
  function redirection() {
    if (widthState === 100) {
      return <Redirect to={href}/>;
    }
    return;
  }
  return(
    <div
      className="nav_link"
      onClick={loadEffect}
      key={"nav_link_"+href}
      >
      {redirection()}
      <span>{children}</span>
      <div
        style={loadLinkStyle}
        key="test_link"
      >
      </div>
    </div>
  );
}

export default LoadLink;