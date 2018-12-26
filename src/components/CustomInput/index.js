
import React, { Component } from 'react';
import './style.css';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';


class CustomInput extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let that = this;
        return (
            <div  className={this.props.size === "half" ?"half mainInput":"mainInput"}>
                <div className="mainInputContainer">
                    <label className="label">
                        <input
                            className={this.props.size === "half" ?"inputText":"inputText"}
                            name={this.props.id}
                            placeholder={this.props.label}
                            value={this.props.data}
                            type={this.props.type ? this.props.type : "text"}
                            onChange={(event) => {this.props.changeValue(this.props.id,event.target.value)}}
                        />
                    </label>
                </div>
            </div>
        );
    }
}

export default CustomInput;
