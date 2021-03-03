import React from "react";
import {  Route, Switch } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Blog from "./Blog";
import Project from "./Project";
import { useTranslation } from 'react-i18next';
const ContentRight = () => {
  const [trans, i18n] = useTranslation();
  const handleClick=(lang)=>{
    console.log('lang: ', lang);
    i18n.changeLanguage(lang);
  }
  return (
    <div className="contentRight">
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/project" component={Project} />
        <Route path="/blog" component={Blog} />
      </Switch>

{/* 
      <p>{trans('Thank.1')}</p>
      <p>{trans('Why.1')}</p> */}


{/* 
      <button onClick={()=>handleClick('en')}>English</button>
      <button onClick={()=>handleClick('vn')}>VietNam</button> */}
    </div>
  );
};

export default ContentRight;
