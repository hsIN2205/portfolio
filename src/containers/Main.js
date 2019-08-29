import React, { useState, useRef } from 'react';

// components
import Hindex from '../components/Hindex';
import Work from '../components/Work';
import Nav from '../components/Nav';
import Aboutme from '../components/Aboutme';

// externals
import { PageSlides, SlideParallaxType } from "react-page-slides";
import Modal from 'react-modal';

// data
import PortfolioData from '../assets/data/portfolio.json';

// styles
import '../assets/css/default.scss';
import '../assets/css/style.scss';
const customStyles = {
  content: {
    top:              '4vh',
    left:             '10vw',
    right:            'auto',
    bottom:           'auto',
    width:            '80vw',
    height:           '92vh',
    backgroundColor:  '#fff',
    overflowY:        'scroll',
    transform:        'translate(2vw, 2vh)',
  }
};

function Main() {
  const [page, setPage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(null);
  const TRANSITION_SPEED = 1000;
  const aboutme = useRef();

  const toggleActive = (className, pageIndex) => {
    const elements = document.querySelectorAll(className);
    elements.forEach((el) => {
      el.classList.remove('active');
    });
    elements[pageIndex].classList.add('active');
  }

  const handleSlide = (changedPage) => {
    toggleActive('.rps-slide', changedPage);
    toggleActive('.nav li', changedPage);
    setPage(changedPage);

    if (changedPage === 1) {
      aboutme.current.setTypedtext('');
      setTimeout(() => {
        if (aboutme.current) {
          aboutme.current.typewriter();
        }
      }, 700);
    }
  }

  const getWorkingView = () => {
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

  const openModal = name => {
    let view = null;
    if (name === 'work') {
      view = getWorkingView();
    } else if (name === 'contect') {
      view = null;
    }
    setView(view);
    setIsOpen(true);
  }

  const slides = [
    {
      content: <Hindex />
    },
    {
      content: <Aboutme ref={aboutme} />
    },
    {
      content: <Work openModal={(name) => openModal(name)} />,
      style: {
        backgroundColor: '#421161',
        color: '#fff'
      }
    }
  ];

  return (
    <React.Fragment>
      <Nav page={page} onClick={(changedPage) => setPage(changedPage)} />
      <PageSlides currentSlideIndex={page}
                  onChange={handleSlide}
                  enableAutoScroll={!isOpen}
                  transitionSpeed={TRANSITION_SPEED}
                  slides={slides}
                  parallax={{ offset: 0.6, type: SlideParallaxType.reveal }}
      />
      <Modal isOpen={isOpen}
              onRequestClose={() => setIsOpen(false)}
              style={customStyles}
              className="modal shadow4"
      >
        {view}
        <a onClick={() => setIsOpen(false)} className="btn-close">
          <i className="fa fa-times"></i>
        </a>
      </Modal>
    </React.Fragment>
  )
}

export default Main;