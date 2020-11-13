import React from 'react';
import './CodeScreen.css';

import Line from '../CodeColorInterface/Line';
import ReactSampleString from '../CodeSamples/ReactSampleString';
import ColorWordsLine from './ColorWordsLine';

function CodeScreen() {
  const ReactSampleArray = ReactSampleString.split("\n");
  return (
    <div className="screen code_screen">
      <div className="code_line">
        {
          ReactSampleArray.map((lineString, index) => {
            return <div key={"code_line_"+index}><Line>{(index+1)}</Line><ColorWordsLine key={"colorwordline_index_"+index}>{lineString}</ColorWordsLine></div>;
          })
        }
      </div>
    </div>
  );
}

export default CodeScreen