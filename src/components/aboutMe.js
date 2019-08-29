import React, { Component } from "react";

class Aboutme extends Component {

  state = {
    typedtext: ''
  }

  clearText = () => {
    this.setState({ typedtext: '' })
  }

  typewriter = () => {
    let aText = ['be a designer'];
    let iIndex = 0; // start printing array at this posision
    let iSpeed = 100; // time delay of print out
    let iArrLength = aText[0].length; // the length of the text array
    let iScrollAt = 20; // start scrolling up at this many lines
    let iTextPos = 0; // initialise text position
    let sContents = ' ';  // initialise contents variable
    let iRow = Math.max(0, iIndex-iScrollAt); // initialise current row
    
    while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
    }
    
    const typedtext = sContents + aText[iIndex].substring(0, iTextPos) ;
    this.setState({ typedtext });
    
    if ( iTextPos++ === iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex !== aText.length ) {
        iArrLength = aText[iIndex].length;
        setTimeout(() => this.typewriter(), 500);
      }
    } else {
      setTimeout(() => this.typewriter(), iSpeed);
    }
  }

  render() {
    const{ typedtext } = this.state;
    return (
      <section className="aboutMe">
        <h2>
          Who am <span>I</span>
        </h2>
        {/* <p>무엇을 해야 하는지는 본인이 잘 알고 있습니다. 해야 한다고 생각하는것을 하면 됩니다.<br/>
언제나 배움의 자세를 멈추지 않고, 발전하는 디자이너가 되겠습니다. </p> */}
        <p className="subTxt">
          I know what to do.
          <br />You can do what you think you should do.
          <br />I will always <span>{typedtext}</span> 
          <br />who does not stop learning and develops.
        </p>
        <ul className="about-content">
          <li><span>Adobe Photoshop</span></li>
          <li>&lt;<span>HTML</span> /&gt;</li>
          <li>&#123;<span>CSS</span>:<span>SASS</span>;&#125;</li>
          <li><span>Java Script</span> &#40;React,Vue&#41;&#123;&#125;</li>
          <li><span>Zeplin / Invision</span></li>
        </ul>
      </section>
    );
  }
}

export default Aboutme;