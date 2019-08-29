import React, { useState, useImperativeHandle, forwardRef } from "react";

const Aboutme = forwardRef((props, ref) => {
  const [typedtext, setTypedtext] = useState('');
  const TYPEWRITER_SPEED = 100; // time delay of print out
  let iTextPos = 0; // initialise text position
  let iRow; // initialise current row

  useImperativeHandle(ref, () => ({
    typewriter: () => typewriter(),
    setTypedtext: (newText) => setTypedtext(newText),
  }));

  const typewriter = () => {
    let aText = ['be a designer'];
    let iArrLength = aText[0].length; // the length of the text array
    let iScrollAt = 20; // start scrolling up at this many lines
    let iIndex = 0; // start printing array at this posision
    let sContents = ' ';  // initialise contents variable
    iRow = Math.max(0, iIndex-iScrollAt); // initialise current row

    while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
    }
    
    const newText = sContents + aText[iIndex].substring(0, iTextPos) ;
    setTypedtext(newText);
    
    if ( iTextPos++ === iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex !== aText.length ) {
        iArrLength = aText[iIndex].length;
        setTimeout(() => typewriter(), 500);
      }
    } else {
      setTimeout(() => typewriter(), TYPEWRITER_SPEED);
    }
  }

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
});

export default Aboutme;