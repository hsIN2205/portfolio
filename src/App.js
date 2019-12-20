import React, { Component } from "react";
// import classNames from 'classnames';
import { ISlideConfig, PageSlides, SlideParallaxType } from "react-page-slides";
import Hindex from './components/Hindex';
import Work from './components/Work';
import Nav from './components/Nav';
import Modal from 'react-modal';
import PortfolioData from './data/portfolio.json';

import "./css/default.scss";
import "./css/style.scss";

// test commit
const customStyles = {
  content : {
    top : '4vh',
    left : '10vw',
    right : 'auto',
    bottom : 'auto',
    transform: 'translate(2vw, 2vh)',
    width:'80vw',
    height:'92vh',
    backgroundColor:'#fff',
    overflowY: 'scroll'
  }
};

var aText = new Array(
  "be a designer"
  //,  
  );
  var iSpeed = 100; // time delay of print out
  
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row

class Aboutme extends Component {

  state = {
    typedtext:''
  }

  clearText = () => {
    this.setState({ typedtext: ''})
  }
    typewriter = () => {
      
      let iIndex = 0; // start printing array at this posision
      sContents =  ' ';
      iRow = Math.max(0, iIndex-iScrollAt);
      
      while ( iRow < iIndex ) {
       sContents += aText[iRow++] + '<br />';
      }
      
      const typedtext = sContents + aText[iIndex].substring(0, iTextPos) ;
      // + "_"
      this.setState({ typedtext });
      if ( iTextPos++ == iArrLength ) {
       iTextPos = 0;
       iIndex++;
       if ( iIndex != aText.length ) {
        iArrLength = aText[iIndex].length;
        setTimeout(() => this.typewriter(), 500);
       }
      } else {
      //  setTimeout("typewriter()", iSpeed);
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


class App extends Component {
  state = {
    page: 0,
    modalIsOpen: false,
    modalData: null,
    view: null,
  }
  modal = false;

  componentDidMount(){
    this._getList(); 
  }

  _getList(){
    this.setState({
      contents : PortfolioData.contents
    });
  }
 
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  
  _updateModalData = (data) => {
    this.setState({
      modalData: data
    })
    this._modalOpen()
  }

  handleSlide = (index) => {
    this.toggleActive('.rps-slide', index);
    this.toggleActive('.nav li', index);
    this.setState({
      page: index
    });

    if (index === 1) {
      this.child.clearText();
      setTimeout(() => {
        this.child.typewriter();
      }, 700); 
    }                                                                    
  }

  toggleActive = (name, index) => {
    const elements = document.querySelectorAll(name);
    elements.forEach((el) => {
      el.classList.remove('active');
    });
    elements[index].classList.add('active');

   // const elements = document.querySelectorAll(name);
    // elements.forEach((el, i) => {
    //   if (index === i) {
    //     el.classList.add('active');
    //   } else {
    //     el.classList.remove('active');
    //   }
    // });


  }

  componentDidMount() {
    const { page } = this.state;
    this.toggleActive('.rps-slide', page);
    this.toggleActive('.nav li', page);
  }


  upDatePage = () => {
    const currnetPage = this.props.page;
   } 
 
   onClick = (order) =>{ 
    this.setState({
      page: order
    });
   }

  updateModal = newModal => {
    this.modal = newModal;
    console.log(this.modal);
  }


  openModal = name =>{
    let view = null;
    if (name === 'work') {
      view = this.working();
    }
    //  else if (name === 'seriousStudy') {
    //   view = this.seriousStudy();
    // }
    else if (name === 'contect') {
      view = this.contect();
    }

    this.setState({ view, modalIsOpen: true });
  }

  working = () => {
    const contents = PortfolioData.contents
    return (
      <div className="working">
        <h2 className="secTitle">Work</h2>
         <ul className="trigger">  
          {contents.map(item => {
            return ( 
                <li key={"w"+item.id}><a href={"#w"+item.id}>{item.title}</a></li>
            )
          })}
        </ul>   
       <ul className="working-content">
        {contents.map(item => {
          return (
                <li key={"w"+item.id} className="clearfix" id={"w"+item.id}>
                  <div className="pfContent">
                    <div className="date">{item.date}</div>
                    <h3>{item.title}</h3>
                    <div className="subTitle">{item.sTitle}</div>
                    <div className="description">{item.description}</div>
                    <div className="use-skills">{item.skill.join(', ')}</div>
                    {/* <a href={item.url}><i class="fa fa-link"></i></a> */}
                  </div>
                  <div className="pfImg"><img src={item.imgSrc} alt={item.title} className="shadow4" /></div>
                </li>
                
              )
            })}
          </ul>
        </div>
    )
  }


  render() {
    const { view, modalIsOpen } = this.state;
    const slides = [
      {
        content: <Hindex/>
      },
      {
        content: <Aboutme ref={instance => { this.child = instance; }} />
      },
      {
        content: <Work openModal={this.openModal}/>,
        style: {
          backgroundColor: "#421161",
          color:"#fff"
        }
      }
    ];
    return (
      <div id="root" className="App">
        <Nav 
          page={this.state.page}
          onClick={this.onClick}
        />
        <PageSlides
          currentSlideIndex={this.state.page}
          // currentSlideIndex={2}//작업후 삭제
          onChange={this.handleSlide}
          enableAutoScroll={!modalIsOpen}
          transitionSpeed={1000}
          slides={slides}
          parallax={{
            offset: 0.6,
            type: SlideParallaxType.reveal
          }}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          className="modal shadow4"
        >
          {view}
        <a onClick={this.closeModal} className="btn-close"><i className="fa fa-times"></i></a>
        </Modal>

      </div>
    );
  }
}

export default App;
