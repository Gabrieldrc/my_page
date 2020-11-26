import React from 'react';

//dark blue js words
function DkB(props) {
  const { children } = props;
  return (
    <span style={{color: " rgb(0, 12, 177)"}}>
      {children}
    </span>
  );
}

export default DkB;