import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Sentinel from "react-sentinel";
import './index.css';

class HeadBar extends Component {
  getSize = () => {
    if (this.container.offSetWidth < 450) return { size: "small" }
    if (this.container.offsetWidth < 950) return { size: "medium" }
    return { size: "large" }
  }
  render(){
    return (
      <div>
            <li><Link to='/'>Home</Link></li>
      </div>
    );
  }
}

export default HeadBar;
