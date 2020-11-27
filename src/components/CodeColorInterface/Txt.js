import React from 'react';

//Text word
function Txt(props) {
  const { children } = props;
  return (
    <span style={{color: " white"}}>
      {children}
    </span>
  );
}

export default Txt;