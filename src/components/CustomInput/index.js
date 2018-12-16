
import React, { Component } from 'react';
import './style.css';
import { chevronDown } from 'react-icons-kit/fa/chevronDown';
import { chevronUp } from 'react-icons-kit/fa/chevronUp';


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
            <div className="mainInput">
                <div className="mainInputContainer">
                    <label className="label">
                        <input
                            className="inputText"
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
