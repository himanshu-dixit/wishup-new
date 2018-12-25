import React, { Component } from 'react';
import './style.css';
import {sendRequest} from "../../services/server";


class Dashboard extends Component {

    constructor(props) {
        super(props);
        let data = {token: localStorage.getItem('token')};
        this.state = {};
        sendRequest('/controller/get_details.php',data).then((data)=>{
            console.log(data);
            if(data.status===200){
                this.setState({name: data.message.name});
            }
        });
    }


    render() {

        return (
            <div className="user-dashboard">
                <div className="dashboard">
                    <div className="wishup-container">
                    <div className="row dashboard-header">
                    <div className="col-sm-2">
                        <img src={require('../../assets/resources/userr.png')} height="85px"/>
                    </div>
                    <div className="col-sm-7">
                        <div className="name"> Hi {this.state.name}</div>
                        <div className="welcome-message">Welcome to wishup</div>
                    </div>
                    <div className="col-sm-3">
                        <div className="button">
                            Contact
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="dashboard-container">
                    <div className="wishup-container">
                    <div className="raised-container">
                        <div className="row">
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm-8">
                                <div className="card">
                                    fd
                                </div>
                            </div>
                            <div className="col-sm-2">
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
