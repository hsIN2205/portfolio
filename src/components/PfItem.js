import React from 'react';

class PfItem extends React.Component {
    render() {
      let skillItem = [];
      let skillList = this.props.skill;
      for (let i = 0; i < skillList.length; i++) {
        skillItem.push(
          <li key={skillList[i].length}>{skillList[i]}</li>
        );
      }
      return (
        <div className="clearfix pf-wrap" key={this.props.id} onClick={this.props.itemClick}>
          <div className="pf-title"><h2>{this.props.title}</h2><span><b>Type_</b>{this.props.sTitle}</span></div>
          <div className="pf-img">
            <img src={this.props.imgSrc} alt=""/>
          </div>
          <div className="pf-cont">
            <div className="desc">{this.props.desc}</div>
            <ul className="u-skill">
              {skillItem}
            </ul>
          </div>
        </div>
      );
    }
  }

  export default PfItem;