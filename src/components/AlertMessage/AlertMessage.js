import React, { useState } from 'react';
import style from './AlertMessage.style';

function AlertMessage(props) {
  const { children } = props;
  const [color, setColor] = useState("white");
  const [display, setDisplay] = useState("unset");
  let styleCloseBtn = {
    ...style.closebtn,
    color: color,
  };
  let styleAlertDiv = {
    ...style.alert,
    display: display,
  };
  const changeXColor = () => {
    setColor(color==="white" ? "black" : "white")
  };
  return(
    <div style={styleAlertDiv}>
      <i style={style.arrow}></i>
      <span style={styleCloseBtn}
        onMouseEnter={changeXColor}
        onMouseLeave={changeXColor}
        onClick={() => {
          setDisplay("none");
        }}
        >&times;
      </span>  
      <div style={style.message}>{children}</div>
    </div>
  );
}

export default AlertMessage;