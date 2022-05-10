import { set } from "mongoose";
import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

function MenuBar() {
  const pathname = window.location.pathname;

  const path = pathname === "/" ? "admin" : pathname.substring(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);
  console.log(path);

  return (
    <Menu tabular size="massive">
      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        onClick={handleItemClick}
        as={Link}
        to={"/"}
      />
      <Menu.Item
        name="wallet"
        active={activeItem === "wallet"}
        onClick={handleItemClick}
        as={Link}
        to={"/wallet"}
      />

      <Menu.Menu position="right">
        <Menu.Item
          name="shareholders"
          active={activeItem === "shareholders"}
          onClick={handleItemClick}
          as={Link}
          to={"/shareholders"}
        />
        <Menu.Item
          name="movies"
          active={activeItem === "movies"}
          onClick={handleItemClick}
          as={Link}
          to={"/movies"}
        />
      </Menu.Menu>
    </Menu>
  );
}

export default MenuBar;
