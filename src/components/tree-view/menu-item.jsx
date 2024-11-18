import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";
/* eslint-disable react/prop-types */
export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    /* console.log(displayCurrentChildren); */
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }
  /* console.log(displayCurrentChildren); */

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
        {item &&
        item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] ? (
          <MenuList list={item.children} />
        ) : null}
      </div>
    </li>
  );
}
