import React from 'react';

//path
function Pt(props) {
  const { children } = props;
  return (
    <span style={{color: "rgb(255, 107, 39)"}}>
      {children}
    </span>
  );
}

export default Pt;