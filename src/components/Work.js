import React, { Component } from "react";
import Modal from 'react-modal';
import PortfolioData from '../data/portfolio.json';

// const customStyles = {
//   content : {
//     top : '4vh',
//     left : '10vw',
//     right : 'auto',
//     bottom : 'auto',
//     transform: 'translate(2vw, 2vh)',
//     width:'80vw',
//     height:'92vh',
//     backgroundColor:'#fff',
//     overflowY: 'scroll'
//   }
// };
 

Modal.setAppElement("#root")


class Work extends Component{

  constructor(props) {
    super(props);
 
    this.state = {
      contents:[ ],
      // modalIsOpen: false,
      modalData: null,
      view: null,
    };
 
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  // componentDidMount(){
  //   this._getList(); 
  //  }
  // _getList(){
  //   this.setState({
  //     contents : PortfolioData.contents
  //   });
  //  }


 
  // closeModal() {
  //   this.setState({modalIsOpen: false});
  //   this.props.updateModal(false);
  // }
  
  // _updateModalData = (data) => {
  //   this.setState({
  //     modalData: data
  //   })
  //   this._modalOpen()
  // }

  // // 
  // openModal = name => event =>{
  //   let view = null;
  //   if (name === 'work') {
  //     view = this.working();
  //   }
  //   //  else if (name === 'seriousStudy') {
  //   //   view = this.seriousStudy();
  //   // }
  //   else if (name === 'contect') {
  //     view = this.contect();
  //   }

  //   this.props.updateModal(true);
  //   this.setState({ view, modalIsOpen: true });
  // }

  // working = () => {
  //   const contents = PortfolioData.contents
  //   return (
  //     <div className="working">
  //       <h2 className="secTitle">Work</h2>
  //        <ul className="trigger">  
  //         {contents.map(item => {
  //           return ( 
  //               <li key={"w"+item.id}><a href={"#w"+item.id}>{item.title}</a></li>
  //           )
  //         })}
  //       </ul>   
  //      <ul className="working-content">
  //       {contents.map(item => {
  //         return (
  //               <li key={"w"+item.id} className="clearfix" id={"w"+item.id}>
  //                 <div className="pfContent">
  //                   <div className="date">{item.date}</div>
  //                   <h3>{item.title}</h3>
  //                   <div className="subTitle">{item.sTitle}</div>
  //                   <div className="description">{item.description}</div>
  //                   <div className="use-skills">{item.skill.join(', ')}</div>
  //                   {/* <a href={item.url}><i class="fa fa-link"></i></a> */}
  //                 </div>
  //                 <div className="pfImg"><img src={item.imgSrc} alt={item.title} className="shadow4" /></div>
  //               </li>
                
  //             )
  //           })}
  //         </ul>
  //       </div>
  //   )
  // }

  // seriousStudy = () => {
  //   // const { b } = this.state;
  //   return(
  //   <h2 className="secTitle">Serious study</h2>
  //   )
  // }

  // contect = () => {
  //   return(
  //     <div>
  //       <h2 className="secTitle">Contect</h2>
  //       <div className="myInfo">
  //       <dl>
  //         <dt>Name</dt>
  //         <dd>In hyo shim</dd>
  //       </dl>
  //       <dl>
  //         <dt>Email</dt>
  //         <dd><a href="mailto:hshehehe1128@gmail.com">hshehehe1128@gmail.com</a></dd>
  //       </dl>
  //       <dl>
  //         <dt>Addrass</dt>
  //         <dd>Seoul</dd>
  //       </dl>
  //       <dl>
  //         <dt>Career</dt>
  //         <dd>6~7 year</dd>
  //       </dl>
  //       <dl>
  //         <dt>Main / Sub</dt>
  //         <dd>web design / web publisher</dd>
  //       </dl>
  //       </div>
  //     </div>
  //     )
  // }
  
  
    render(){
      // const { contents, modalData, view } = this.state
      // const filteredContents = contents
      return(
        <div className="work">
         <ul>
           <li onClick={() => this.props.openModal('work')} >
             <a className="work-sec1">
               <span>work</span>
             </a>
           </li>
           <li>
             <a href="/img/resume.pdf" download className="work-sec2">
               <span>resume</span>
             </a>
           </li>
           <li>
             <a className="work-sec3" href="mailto:hshehehe1128@gmail.com">
               <span>contect</span>
             </a>
           </li>
         </ul>

         {/* <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          className="modal shadow4"
        >
          {view}
        <a onClick={this.closeModal} className="btn-close"><i className="fa fa-times"></i></a>
        </Modal> */}

        
      </div>
      )
    }
  }



export default Work;