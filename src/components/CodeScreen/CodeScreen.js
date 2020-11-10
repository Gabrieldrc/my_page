import React from 'react';
import './CodeScreen.css';

import RW from './CodeColorInterface/RW';
import Vb from './CodeColorInterface/Vb';
import Pt from './CodeColorInterface/Pt';

function CodeScreen() {
  return (
    <div className="screen code_screen">
      <div className="code_line">
        <span className="number_line">1</span>  <RW>import</RW> <Vb>React</Vb> <RW>from</RW> <Pt>'react'</Pt>
      </div>
    </div>
  );
}

export default CodeScreen