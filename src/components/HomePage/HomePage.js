import React from 'react';
import './HomePage.css';

import CodeScreen from '../CodeScreen/CodeScreen';

function HomePage() {
  return(
    <div className="body_content">
      {/* <div className="left_menu" id="left_menu">
        <a href="/a" className="nav_link" key="nav_link_aboutme">About Me</a>
        <a href="/" className="nav_link" key="nav_link_fontend">Front-End</a>
        <a href="/" className="nav_link" key="nav_link_backend">Back-End</a>
      </div> */}
      <div className="content_box">
        <div>
          <p>Welcome.</p>
          <p>This is your terminal, just select where you want to go.</p>
        </div>
        <div className="screens_container">
          <CodeScreen />
          <div className="screen render_screen">

          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;