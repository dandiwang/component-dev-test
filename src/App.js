import logo from "./img/abc_logo.svg";
import { React, useState } from "react";
import "./App.css";
import content from "./data/content.json";

const pages = content.pages;
const menu = [];
pages.forEach((ele) => {
  menu.push(ele.title);
});
// console.log(menu);
const LayoutLevel = (info) => {
  return (
    <div className="layout">
      <div className="left verticle" id="menu-box">
        <img id="abc" src={logo} className="App-logo" alt="logo" />
        <a className="menu-btn">{menu[0]}</a>
        <a className="menu-btn">{menu[1]}</a>
        <a className="menu-btn">{menu[2]}</a>
      </div>
      <div className="right">
        <button id="contactUs">Contect Us</button>
      </div>
    </div>
  );
};
const PageLevel = (props) => {
  // console.log(page, page.page.headline);
  const Headline = (props) => {
    // console.log(text, text.headline);
    return (
      <div>
        <h1 id="headline">{props.headline}</h1>
      </div>
    );
  };
  const Subhead = (props) => {
    console.log(props);
    return (
      <div>
        <p id="subhead">{props.subhead}</p>
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
  return (
    <div className="page">
      <Headline headline={props.page.headline} />
      <Subhead subhead={props.page.subhead} />
      <CTA cta={props.page.cta} />
    </div>
  );
};

function App() {
  const [curPage, setCurPage] = useState(2);
  const texts = pages[curPage].blocks[0];
  const changePage = (e) => {
    console.log(e);
    // setCurPage(e);
  };
  console.log(texts.background);
  const bg = "url(img/backgrounds/slide_one.jpg)";
  //`url(img/backgrounds/${texts.background} )`;
  console.log(bg);
  return (
    <div
      className="App"
      // style={{
      //   backgroundImage: `url(${
      //     process.env.PUBLIC_URL + "/img/backgrounds/slide_one.jpg"
      //   })`,
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <div className="container">
        <LayoutLevel changePage={changePage} />
        <PageLevel page={texts} />
      </div>
    </div>
  );
}

export default App;
