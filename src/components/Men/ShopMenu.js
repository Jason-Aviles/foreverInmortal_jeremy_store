import React from 'react';
import {NavLink} from "react-router-dom"
const ShopMenu = () => {
  return (
    <>
      
<li className="cloths-menu__item">shop</li>
<li className="cloths-menu__item">    <NavLink
                exact
                className="nav__item"
                activeClassName="active"
                to="/Men/graphictee"
              > graphic tee</NavLink> </li>
<li className="cloths-menu__item">  

<NavLink
                exact
                className="nav__item"
                activeClassName="active"
                to="/Men/longsleeve"
              >

longsleeve</NavLink></li>
<li className="cloths-menu__item">

<NavLink
                exact
                className="nav__item"
                activeClassName="active"
                to="/Men/hoodie"
              >
hoodie</NavLink></li>
    </>
  );
};

export default ShopMenu;