import React from "react";

import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav class="menu">
      <NavLink
        className="menu__item"
        activeClassName="menu__item-active"
        to="/"
      >
        Главная
      </NavLink>
      <NavLink
        className="menu__item"
        activeClassName="menu__item-active"
        to="/drift"
      >
        Дрифт-такси
      </NavLink>
      <NavLink
        className="menu__item"
        activeClassName="menu__item-active"
        to="/timeattack"
      >
        Time Attack
      </NavLink>
      <NavLink
        className="menu__item"
        activeClassName="menu__item-active"
        to="/forza"
      >
        Forza Karting
      </NavLink>
    </nav>
  );
}
