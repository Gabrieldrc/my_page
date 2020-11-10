import React from 'react';

//variable word
function Vb(props) {
  const { children } = props;
  return (
    <span style={{color: "rgb(116, 219, 253)"}}>
      {children}
    </span>
  );
}

export default Vb;