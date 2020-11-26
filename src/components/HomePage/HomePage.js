import React from 'react';
import './HomePage.css';

import Title from '../Title/Title';
import ContentBox from '../ContentBox/ContentBox';

function HomePage() {
  return(
    <div className="body_content">
      <div src="./images/wallpaper.jpg" alt="transparent_image" className="transparent_image">
      </div>
      <section>
        <ContentBox>
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
        </ContentBox>
      </section>
    </div>
  );
}

export default HomePage;