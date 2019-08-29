import React, { Component } from "react";

// components
import Hindex from './components/Hindex';
import Work from './components/Work';
import Nav from './components/Nav';
import Aboutme from './components/Aboutme';

// externals
import { PageSlides, SlideParallaxType } from "react-page-slides";
import Modal from 'react-modal';

// data
import PortfolioData from './data/portfolio.json';

// styles
import "./css/default.scss";
import "./css/style.scss";
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

class App extends Component {
  state = {
    page: 0,
    modalIsOpen: false,
    modalData: null,
    view: null,
  }
  modal = false;

  getPortfolioList = () => {
    this.setState({
      contents : PortfolioData.contents
    });
  }
 
  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  }
  
  updateModalData = (data) => {
    this.setState({
      modalData: data
    });
    this.modalOpen();
  }

  updateModal = newModal => {
    this.modal = newModal;
  }

  handleSlide = (changedPage) => {
    this.toggleActive('.rps-slide', changedPage);
    this.toggleActive('.nav li', changedPage);
    this.setState({
      page: changedPage
    });

    if (changedPage === 1) {
      this.child.clearText();
      setTimeout(() => {
        this.child.typewriter();
      }, 700); 
    }                                                                    
  }

  toggleActive = (className, pageIndex) => {
    const elements = document.querySelectorAll(className);
    elements.forEach((el) => {
      el.classList.remove('active');
    });
    elements[pageIndex].classList.add('active');
  }

  componentDidMount() {
    const { page } = this.state;
    this.toggleActive('.rps-slide', page);
    this.toggleActive('.nav li', page);
    this.getPortfolioList();
  }
 
  navClick = (changedPage) =>{ 
    this.setState({
      page: changedPage
    });
  }

  openModal = name => {
    let view = null;
    if (name === 'work') {
      view = this.getWorkingView();
    } else if (name === 'contect') {
      view = this.contect();
    }

    this.setState({
      view, 
      modalIsOpen: true 
    });
  }

  getWorkingView = () => {
    const contents = PortfolioData.contents;
    return (
      <div className="working">
        <h2 className="secTitle">Work</h2>
          <ul className="trigger">  
          {
            contents.map(item => {
              return ( 
                <li key={"w"+item.id}>
                  <a href={"#w"+item.id}>{item.title}</a>
                </li>
              )
            })
          }
          </ul>
          <ul className="working-content">
          {
            contents.map(item => {
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
                  <div className="pfImg">
                    <img src={item.imgSrc} alt={item.title} className="shadow4" />
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  render() {
    const { view, modalIsOpen, page } = this.state;
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
          page={page}
          onClick={this.navClick}
        />
        <PageSlides
          currentSlideIndex={page}
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
          isOpen={modalIsOpen}
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
