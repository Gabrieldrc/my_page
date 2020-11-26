import React from 'react';
import './SkillsPage.css';

import Title from '../Title/Title';
import LateralMenu from '../LateralMenu/LateralMenu';
import ContentBox from '../ContentBox/ContentBox';
import CodeScreen from '../CodeScreen/CodeScreen';

// Images
import html5Logo from '../../images/html5.png';
import cssLogo from '../../images/css3.png';
import jsLogo from '../../images/js.logo.png';

// Samples
import HtmlSampleString from '../CodeSamples/HtmlSampleString';

function SkillsPage() {
  return(
    <div className="body_content">
      <div src="./images/wallpaper.jpg" alt="transparent_image" className="transparent_image">
      </div>
      {/* <LateralMenu /> */}
      <section id="html_section">
        <ContentBox>
          <img alt="html5 logo" id="html5_logo" className="logo" src={html5Logo}></img>
          <Title>Skeleton</Title>
          <div className="screens_container">
            <CodeScreen sample={HtmlSampleString}/>
            <div className="screen render_screen">

            </div>
          </div>
        </ContentBox>
        <div id="section_scroll_box">
          <a href="#css_section" className="scroll_section"><span></span>Next</a>
        </div>
      </section>
      <section id="css_section">
        <ContentBox>
          <img alt="css3 logo" id="css3_logo" className="logo" src={cssLogo}></img>
          {/* <Title>Skills 2</Title> */}
          <p>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.</p>
        </ContentBox>
        <div id="section_scroll_box">
          <a href="#js_section" className="scroll_section"><span></span>Next</a>
        </div>
      </section>
      <section id="js_section">
        <ContentBox>
          <img alt="js logo" id="js_logo" className="logo" src={jsLogo}></img>
          {/* <Title>Skills 3</Title> */}
          <p>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.</p>
        </ContentBox>
      </section>
    </div>
  );
}

export default SkillsPage;