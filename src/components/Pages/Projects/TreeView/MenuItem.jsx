import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren((prevState) => ({
      ...prevState,
      [getCurrentLabel]: !prevState[getCurrentLabel],
    }));
  };

  return (
    <li className="menu-item">
      <div className="menu-item-header">
        <a href={item.to}>{item.label}</a>
        {item.children && item.children.length > 0 && (
          <button
            onClick={() => handleToggleChildren(item.label)}
            aria-expanded={displayCurrentChildren[item.label] || false}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </button>
        )}
      </div>
      {item.children &&
        item.children.length > 0 &&
        displayCurrentChildren[item.label] && <MenuList list={item.children} />}
    </li>
  );
}
export default MenuItem;
