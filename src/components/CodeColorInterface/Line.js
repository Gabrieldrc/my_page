import React from 'react';
import Sp from './Sp';

//Line color with a default uniform blanck spaces
function Line(props) {
  const { children } = props;
  const spaceFixed = (number) => {
    const blankSpaces = 4 - number;
    let blankSpacesComponents = [];
    for (let index = 0; index < blankSpaces; index++) {
      blankSpacesComponents.push(<Sp/>);
    }
    return blankSpacesComponents;
  };
  return (
    <div key={"line"+children} style={{display: "inline"}}>
      <span style={{color: "gray"}}>{children}</span>{spaceFixed(children.toString().length)}
    </div>
  );
}

export default Line;