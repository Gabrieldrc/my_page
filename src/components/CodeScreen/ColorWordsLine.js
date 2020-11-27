import React from 'react';
import reservedWords from './reservedWords';

import Sp from '../CodeColorInterface/Sp';
import RW from '../CodeColorInterface/RW';
import DkB from '../CodeColorInterface/DkB';
import Ft from '../CodeColorInterface/Ft';
import Pt from '../CodeColorInterface/Pt';
import Vb from '../CodeColorInterface/Vb';
import Txt from '../CodeColorInterface/Txt';

function ColorWordsLine(props) {
  const lineUnColored = props.children;
  
  const printLineColored = (string) => {
    let word = "";
    let lineColored = [];
    let pathStarted = false;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "\"" || string[i] === "'" || pathStarted) {
        word +=  string[i];
        pathStarted = true;
        if (word.length > 1) {
          if (word[0] === word[word.length -1]) {
            lineColored.push(<Pt>{word}</Pt>);
            pathStarted = false;
          } 
        }
      } else if (string[i] === " ") {
        lineColored.push(<Sp/>)
      } else if (string[i].match(/[A-z]/g) != null) {
        word += string[i];
        if (i + 1 < string.length) {
          if (string[i+1].match(/[ \W]/g)) {
            if (reservedWords.nodeJS.includes(word)) {
              lineColored.push(<RW>{word}</RW>);
            } else if (reservedWords.jS.includes(word) || reservedWords.html.includes(word)) {
              lineColored.push(<DkB>{word}</DkB>);
            } else if (string[i+1].match(/\(/g)) {
              lineColored.push(<Ft>{word}</Ft>);
            } else {
              lineColored.push(<Vb>{word}</Vb>);
            }
            word = "";
          }
        } else {
          lineColored.push(<Txt>{word}</Txt>);
          word = "";
        }
      } else {
        lineColored.push(string[i]);
      }
    }

    return lineColored;

  };

  return(
    <div style={{display: "inline"}}>
      {printLineColored(lineUnColored)}
    </div>
  );
}

export default ColorWordsLine;