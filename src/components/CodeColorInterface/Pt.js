import React from 'react';

//path
function Pt(props) {
  const { children } = props;
  return (
    <span style={{color: "rgb(187, 76, 25)"}}>
      {children}
    </span>
  );
}

export default Pt;