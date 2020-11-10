import React from 'react';

//reserved word
function RW(props) {
  const { children } = props;
  return (
    <span style={{color: "rgb(168, 60, 168)"}}>
      {children}
    </span>
  );
}

export default RW;