import React,{Component} from 'react';
import Visual from './components/Visual';
import PortfolioList from './components/portfolioList';
import Modal from 'react-modal';
import PortfolioData from './data/portfolio.json';


import './css/default.scss';
import './css/style_190625.scss';


Modal.setAppElement('#root')


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contents:[ ],
      // category:['All Site','Business','Block chain','School/Academy','Community','Medical Institutions','Shopping mall','Arts & Culture','ETC'],
      category:['All Site','Issuers','Investors','Service Providers'],
      index: 0,
      modalData: null,
      modalIsOpen: false
    }
  }

  componentDidMount(){
     this._getList(); 
    }
   _getList(){
     this.setState({
       contents : PortfolioData.contents
     });
    }


  _updateIndex = (clickIndex) => {
    this.setState({
      index: clickIndex
    })
  }

  _modalOpen = () => {
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  }
  
  _updateModalData = (data) => {
    this.setState({
      modalData: data
    })
    this._modalOpen()
  }
  
  render(){
    const { contents, category, index, modalData } = this.state
    const filteredContents = contents.filter(content => {
      if (index === 0) return true
      return content.sTitle === category[index]
    })
    const customStyles = {
      content: {
        position              : 'absolute',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    }

    return (
      
      <div id="root" className="App">
        <Visual></Visual>
        <PortfolioList data={filteredContents} tabClick={this._updateIndex} itemClick={this._updateModalData}></PortfolioList>
        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            className="Modal"
            overlayClassName="Overlay"
          >
            {
              modalData ? (
                <React.Fragment>
                  {/* <div>{modalData.skill.join(', ')}</div> */}
                  <div className="md-img">
                    <img src={modalData.imgSrc} alt={modalData.title}/>
                </div>   
                <div className="md-cont">
                    <h2 className="md-title">{modalData.title}<span><b>Type_</b> {modalData.sTitle}</span></h2>
                    <div className="md-desc">{modalData.desc}
                            <ul className="u-skill">
                                    <li>{modalData.skill.join(', ')}</li>
                                    <li>CSS</li>
                            </ul>
                    </div>
                </div>

                <button onClick={this.closeModal} className="btn-close"><i className="fa fa-times"></i></button>

                </React.Fragment>
              ) : (<h1>no data</h1>)
            }
          </Modal>
      
      </div>
    );
 }
}


export default App;
