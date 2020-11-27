import React from 'react';

//dark blue js words
function DkB(props) {
  const { children } = props;
  return (
    <span style={{color: " rgb(46, 95, 255)"}}>
      {children}
    </span>
  );
}

export default DkB;