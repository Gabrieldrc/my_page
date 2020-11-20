import React from 'react';
import './ContentBox.css';

function ContentBox(props) {
  return(
    <div className="content_box">
      {props.children}
    </div>
  );
}

export default ContentBox;