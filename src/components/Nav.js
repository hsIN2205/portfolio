import React from "react";

function Nav({onClick}) {
  return(
    <ul className="nav">
      <li onClick={() => onClick(0)}><a href="#"></a></li>
      <li onClick={() => onClick(1)}><a href="#"></a></li>
      <li onClick={() => onClick(2)}><a href="#"></a></li>
    </ul>
  );
}

export default Nav;