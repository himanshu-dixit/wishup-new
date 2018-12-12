import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Sentinel from "react-sentinel";
import '../../styles/index.css';
import styles from './styles';
import Icon from 'react-icons-kit';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';
import { css } from 'aphrodite';


class CustomInput extends Component {
    constructor(props){
        super(props);
        this.setState({value : ""});
    }
    toggle = () => {

    }
    render(){
        //<Link to='/'>Home</Link>
        return (
            <div className={css(styles.mainInput)}>
                <div className={css(styles.mainInputContainer)}>
                    <label className={css(styles.label)}>
                        <input
                            className={css(styles.inputText)}
                            name={this.props.id}
                            placeholder={this.props.label}
                            type={this.props.type ? this.props.type : "text"}
                            onChange={(event) => {this.setState({value: event.target.value})}}
                        />
                    </label>
                </div>
            </div>
        );
    }
}

export default CustomInput;
