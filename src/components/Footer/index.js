import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Sentinel from "react-sentinel";
import '../../styles/index.css';
import styles from './styles';
import Icon from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';
import './footer.css';


class Footer extends Component {
    toggle = () => {

    }
    render(){
        //<Link to='/'>Home</Link>
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-4">
                            <div className="col-md-6">
                            </div>
                            <div className="col-md-6">
                            </div>
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
