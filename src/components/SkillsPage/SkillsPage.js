import React from 'react';
import './SkillsPage.css';

import Title from '../Title/Title';
import LateralMenu from '../LateralMenu/LateralMenu';
import ContentBox from '../ContentBox/ContentBox';

function SkillsPage() {
  return(
    <div className="body_content">
      <div src="./images/wallpaper.jpg" alt="transparent_image" className="transparent_image">
      </div>
      {/* <LateralMenu /> */}
      <section>
        <ContentBox>
          <div id="html5_logo" className="logo"></div>
          {/* <Title>Skills</Title> */}
          <p>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.</p>
        </ContentBox>
      </section>
      <section>
        <ContentBox>
          <div id="css3_logo" className="logo"></div>
          {/* <Title>Skills 2</Title> */}
          <p>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.</p>
        </ContentBox>
      </section>
      <section>
        <ContentBox>
          <div id="reactjs_logo" className="logo"></div>
          {/* <Title>Skills 3</Title> */}
          <p>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.</p>
        </ContentBox>
      </section>
    </div>
  );
}

export default SkillsPage;