import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { itemMenu } from "../ListData";
const MenuLeft = () => {
  const [status, setStatus] = useState(0);
  const [corner, setCorner] = useState("rotate(45deg)");

  const changeMenu = (item, index) => {
    setStatus(index);
    setCorner(item.corner);
    document.body.style.setProperty("--default-theme", `${item.color}`);
  };
  useEffect(() => {
    document.body.style.setProperty("--default-theme", "#f84b3e");
  }, []);
  return (
    <div className="menuLeft">
      <div className="menuLeft__title">
        <h1>Đỗ Mạnh Hùng</h1>
        <h1>Oliver</h1>

      </div>
      <div className="menuLeft__menu">
        <div className="menuLeft__menu--content">
          {itemMenu.map((item, index) => {
            return (
              <Link
                className={
                  status === index
                    ? "menuLeft__menu--item active"
                    : "menuLeft__menu--item"
                }
                key={index}
                to={item.path}
                style={item.style}
                onClick={() => changeMenu(item, index)}
              >
                <div className="menuLeft__menu--item--icon">{item.icon}</div>
                {item.name}
              </Link>
            );
          })}
        </div>
        <div
          className="menuLeft__menu--half"
          style={{ transform: `${corner}` }}
        >
          <div></div>
          <div className="number"></div>
          <div></div>
          <div></div>
          <div className="menuLeft__menu--half--center"></div>
        </div>
      </div>
      <div className="menuLeft__footer">
        <h2>Let's work together</h2>
        <div className="menuLeft__footer__content">
          <div className="menuLeft__footer__content--item">
            <i className="fab fa-facebook-f" />
          </div>
          <div className="menuLeft__footer__content--item">
            <i className="fa fa-envelope" />
          </div>
          <div className="menuLeft__footer__content--item">
            <i className="fa fa-mobile-alt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLeft;
