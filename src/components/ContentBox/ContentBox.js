import React, {useState, useEffect} from 'react';
import './ContentBox.css';

function ContentBox(props) {
  const [visibility, setVisibility] = useState("hidden");
  let contentVisibilityStyle = {
    display: "block",
    visibility: visibility,
  };
  useEffect(() => {  
    setTimeout(() => { setVisibility("visible") }, 1500);
  },[])
  return(
    <div className="content_box">
      <div style={contentVisibilityStyle}>
        {props.children}
      </div>
    </div>
  );
}

export default ContentBox;