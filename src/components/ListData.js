import React from "react";
const itemMenu = [
  {
    id: 1,
    name: "About",
    style: { top: "50%", left: "83%" },
    icon: <i className="fa fa-user" />,
    path: "/about",
    corner: "rotate(45deg)",
    color: "#f84b3e",
  },
  // {
  //   id: 2,
  //   name: "Skills",
  //   style: { top: "83%", left: "50%" },
  //   icon: <i className="fa fa-chart-bar" />,
  //   path: "/skills",
  //   corner: "rotate(135deg)",
  //   color: "#01d1a7",
  // },
  {
    id: 3,
    name: "Project",
    style: { top: "50%", left: "17%" },
    icon: <i className="fa fa-suitcase-rolling" />,
    path: "/project",
    corner: "rotate(225deg)",
    color: "#2980b9",
  },
  {
    id: 4,
    name: "Blog",
    style: { top: "17%", left: "50%" },
    icon: <i className="fa fa-feather-alt" />,
    path: "/blog",
    corner: "rotate(315deg)",
    color: "#f1c40f",
  },
];
const infor = [
  { 
    id: 1,
    name:"Facebook",
    color:"#2980b9",
    icon:<i className="fab fa-facebook-f" />,
    infor:"https://www.facebook.com/DoHung1995",
    link:"https://www.facebook.com/DoHung1995"
  },
  { 
    id: 2,
    name:"Gmail",
    color:"#e74c3c",
    icon:<i className="fa fa-envelope" />,
    infor:"hungdomanh95@gmail.com",
    link:"mailto:hungdomanh95@gmail.com",
  },
  { 
    id: 3,
    name:"Facebook",
    color:"#2ecc71",
    icon:<i className="fa fa-mobile-alt" />,
    infor:"037 7711 455",
    link:"",
  },
];
export { itemMenu,infor };
