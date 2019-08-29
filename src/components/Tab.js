import React,{Component} from 'react';



class Tab extends Component{
    render(){
      let Ctrigger = [];
      let CategoryList = this.props.data;
      for (let categoryIndex = 0; categoryIndex < CategoryList.length; categoryIndex++){
        const category = CategoryList[categoryIndex];
        Ctrigger.push(
          <li
            key={category.name}
            className={category.selected ? 'selected' : ''} 
            onClick={() => this.props.tabClick(categoryIndex)}
          >
            <span>{category.name}</span>
          </li>
        );
      }
      return(
          <ul className="trigger">
            {Ctrigger}
          </ul>
      );
    }
  }
  

export default Tab;
