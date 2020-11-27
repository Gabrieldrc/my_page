import React from 'react';
import './WorkSample.css';
import htmlCssJsVideo from '../../videos/htmlCssJsWorking.mp4';

function WorkSample() {
  return(
    <div className="body_content">
      <section id="frontend_resume_box">
        <video width="320" height="240" autoPlay loop muted>
          <source src={htmlCssJsVideo} type="video/mp4"></source>
        </video>
      </section>
    </div>
  );
}

export default WorkSample;