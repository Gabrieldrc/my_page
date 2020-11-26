import React from 'react';

//function word
function Ft(props) {
  const { children } = props;
  return (
    <span style={{color: "rgb(246, 246, 0)"}}>
      {children}
    </span>
  );
}

export default Ft;