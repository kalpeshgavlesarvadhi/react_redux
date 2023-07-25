import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/cocktail">Cocktail</NavLink>
    </div>
  );
}

export default Navbar;
