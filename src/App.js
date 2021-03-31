import logo from "./img/abc_logo.svg";
import { React, useState } from "react";
import "./App.css";
import content from "./data/content.json";

const pages = content.pages;
const menu = [];
const bg = [];
pages.map((value) => {
  menu.push(value.title);

  require(`./img/backgrounds/${value.blocks[0].background}`);
  bg.push(`./img/backgrounds/${value.blocks[0].background}`);
  console.log(bg);
});

// console.log(menu);
const LayoutLevel = (info) => {
  console.log(info.changePage);
  return (
    <div className="layout max-width-1440">
      <div className="left verticle" id="menu-box">
        <img id="abc" src={logo} className="App-logo" alt="logo" />
        <a className="menu-btn" onClick={() => info.changePage(0)}>
          {menu[0]}
        </a>
        <a className="menu-btn" onClick={() => info.changePage(1)}>
          {" "}
          {menu[1]}
        </a>
        <a className="menu-btn" onClick={() => info.changePage(2)}>
          {menu[2]}
        </a>
      </div>
      <div className="right">
        <button id="contactUs">Contect Us</button>
      </div>
    </div>
  );
};
const CTA = (props) => {
  return (
    <div id="call-to-action">
      <p className="left" id="cta-text">
        {props.cta}
      </p>
      <p className="right" id="LETS-TALK">
        Let's talk
      </p>
    </div>
  );
};
const PageLevel = (props) => {
  return (
    <div className="page max-width-1440">
      <p id="headline">{props.page.headline}</p>
      <p id="subhead">{props.page.subhead}</p>
    </div>
  );
};

function App() {
  const [curPage, setCurPage] = useState(2);
  const texts = pages[curPage].blocks[0];
  const changePage = (e) => {
    console.log(e);
    setCurPage(e);
  };
  return (
    <div
      className="App"
      style={
        {
          // backgroundImage: `url(${bg[curPage]})`,
        }
      }
    >
      <LayoutLevel changePage={changePage} />
      <PageLevel page={texts} />
      <CTA cta={texts.cta} />
    </div>
  );
}

export default App;
