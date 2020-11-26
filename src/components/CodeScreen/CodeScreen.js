import React from 'react';
import './CodeScreen.css';

import Line from '../CodeColorInterface/Line';
import ColorWordsLine from './ColorWordsLine';

function CodeScreen(props) {
  const sampleString = props.sample;
  const SampleArray = sampleString.split("\n");
  return (
    <div className="screen code_screen">
      {
        SampleArray.map((lineString, index) => {
          return <div key={"code_line_"+index} className="line"><Line>{(index+1)}</Line><ColorWordsLine key={"colorwordline_index_"+index}>{lineString}</ColorWordsLine></div>;
        })
      }
    </div>
  );
}

export default CodeScreen