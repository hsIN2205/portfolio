import React, { Component } from "react";

class Nav extends Component {
  trigger = (order) => {
    this.props.onClick(order);
  }

  render() {
    return(
      <ul className="nav">
        <li onClick={() => this.trigger(0)}><a href="#"></a></li>
        <li onClick={() => this.trigger(1)}><a href="#"></a></li>
        <li onClick={() => this.trigger(2)}><a href="#"></a></li>
      </ul>
    );
  }
}



export default Nav;