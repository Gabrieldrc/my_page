import React from 'react';
import './LateralMenu.css';

function LateralMenu() {
  return(
    <div className="lateral_menu">
      <div className="display_button">
        <div className="arrow"></div>
      </div>
      <ul>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
        <li>list4</li>
      </ul>
    </div>
  );
}

export default LateralMenu;