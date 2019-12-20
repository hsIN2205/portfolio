import React, { Component } from "react";

class Circle extends Component {
  render() {
    return (
      <div className="circle">
          <div className="circle1" />
          <div className="circle2" />
          <div className="circle3" />
          <div className="circle4" />
          <div className="circle5" />
        </div>
    )
  }
}



class Hindex extends Component {
  render() {
    return (
      <section className="main">
        <div className="logo">WD.<span>hsINTTTTTT</span></div>
        <div className="slogan">
          <span className="sp1">I</span>
          <span className="sp2"> a</span>
          <span className="sp3">m</span>
          <br />
          <span className="sp4">W</span>
          <span className="sp5">e</span>
          <span className="sp6">b</span>
          <span className="sp7"> D</span>
          <span className="sp8">e</span>
          <span className="sp9">s</span>
          <span className="sp10">i</span>
          <span className="sp11">g</span>
          <span className="sp12">n</span>
          <span className="sp13">e</span>
          <span className="sp14">r</span>
          <br />
          <span className="sp15">w</span>
          <span className="sp16">i</span>
          <span className="sp17">t</span>
          <span className="sp18">h</span>
          
          <span className="sp19"> D</span>
          <span className="sp20">e</span>
          <span className="sp21">v</span>
          <span className="sp22">e</span>
          <span className="sp23">l</span>
          <span className="sp24">o</span>
          <span className="sp25">p</span>
          <span className="sp26">m</span>
          <span className="sp27">e</span>
          <span className="sp28">n</span>
          <span className="sp29">t</span>
          <span className="sp30"> S</span>
          <span className="sp31">k</span>
          <span className="sp32">i</span>
          <span className="sp33">l</span>
          <span className="sp34">l</span>
          <div className="scollDown">
            <svg
              id="scollDown"
              data-name="scollDown"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 41.31 27.86"
            >
              <title>down</title>
              <path
                d="M0,1.89A1.87,1.87,0,0,1,.78.37,1.89,1.89,0,0,1,3.42.75L18,20.75a1.89,1.89,0,1,1-2.66,2.68A1.67,1.67,0,0,1,15,23L.37,3A1.88,1.88,0,0,1,0,1.89Z"
                transform="translate(0 0)"
                style={{ fill: "#fff" }}
              />
              <path
                d="M18.76,26a1.88,1.88,0,0,1,.4-1.16L37.91.75a1.9,1.9,0,1,1,3,2.32h0L22.14,27.13A1.89,1.89,0,0,1,18.76,26Z"
                transform="translate(0 0)"
                style={{ fill: "#fff" }}
              />
            </svg>
            Please scoll down
          </div>
        </div>
        <Circle/>
      </section>
    );
  }
}
export default Hindex;