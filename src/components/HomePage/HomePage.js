import React from 'react';
import './HomePage.css';

import CodeScreen from '../CodeScreen/CodeScreen';
import Title from '../Title/Title';

function HomePage() {
  return(
    <div className="body_content">
      <div src="./images/wallpaper.jpg" alt="transparent_image" className="transparent_image">
      </div>
      <div className="content_box">
        <Title>Welcome</Title>
        <p>This is me, <span className="highlight_text">Gabriel Rodriguez</span>. I am a <span className="highlight_text underline_text">WEB DEVELOPER</span>, and this is my dynamic terminal. Here i'll show you who i am .</p>
        <p>As you can see, This is like a linux terminal. Travel around the carpets by clicking in the nav above (at the "$" sign). 
           There you'll find:
        </p>
        <ul>
          <li>Home (where you are now)</li>
          <li>About Me</li>
          <li>My Projects</li>
          <li>Skills</li>
        </ul>
        <h3 className="start_title">SO START THEN</h3>
        {/* <div className="screens_container">
          <CodeScreen />
          <div className="screen render_screen">

          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HomePage;