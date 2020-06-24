import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { itemMenu,infor } from "../ListData";
import Typing from "../../library/Typing";

const MenuLeft = () => {
  const [status, setStatus] = useState(0);
  const [showInfor, setShowInfor] = useState("");
  const [statusInfor, setStatusInfor] = useState(false);
  const [corner, setCorner] = useState("rotate(45deg)");
  // const [textAnimation, setTextAnimation] = useState("");

  const changeMenu = (item, index) => {
    setStatus(index);
    setCorner(item.corner);
    document.body.style.setProperty("--default-theme", `${item.color}`);
  };

  const __showInfor=(item,index)=>{
    setStatusInfor(true)
    setShowInfor(item.infor)
  }

  useEffect(() => {
    document.body.style.setProperty("--default-theme", "#f84b3e");
 
  }, []);
  return (
    <div className="menuLeft">
      <div className="menuLeft__title">
          <h1>Oliver</h1>
        <div className='text'>
      <Typing data={[" Hi, I'm Hùng. "," I'm a Developer. "," I'm a Single. "]}>   </Typing>
        </div>
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
        <div className="menuLeft__menu--half" style={{ transform: `${corner}` }}>
          <div></div>
          <div className="number"></div>
          <div></div>
          <div></div>
        </div>
        <div className="menuLeft__menu--half--center">
            <img src="images/logo-white.png"  alt="logo" />
          </div>
      </div>
      <div className="menuLeft__footer">
        <h2>Let's work together</h2>
        <div className="menuLeft__footer__content">
        {infor.map((item,index)=>{
          return(
            <div className="menuLeft__footer__content--item" key={index} onClick={()=>__showInfor(item,index)}  >
              <a href={`${item.link}`} target="_blank">  
                {item.icon}
              </a>
            </div>
          )
        })}
        </div>
       
        <div className="infor" >
          {statusInfor && showInfor}
        </div>
      </div>
    </div>
  );
};

export default MenuLeft;
