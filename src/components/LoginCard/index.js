import React, {Component} from 'react';
import '../../styles/index.css';
import CustomInput from '../CustomInput';
import {loop} from 'react-icons-kit/ionicons/loop';
import './style.css';
import {sendRequest} from '../../services/server.js';
import GoogleLogin from 'react-google-login';
import { LinkedIn } from 'react-linkedin-login-oauth2';

import FacebookLogin from 'react-facebook-login';


class LoginCard extends Component {
    constructor(props) {
        super(props);
        this.state =  {name: '', email: '', phone: '', state: 'login', selectedTags: [], otherTag: false, newtag: ''};
        this.tags = ['Social','Task'];
        localStorage.setItem('data',JSON.stringify(this.state));
    }

    loadState(){
        this.setState(JSON.parse(localStorage.getItem('data')));
    }
    redirect(){
        window.location.replace("/dashboard");
    }

    responseGoogle(response){
        this.loadState();
        let email = response.profileObj.email;
        let id = response.El;
        let token = response.Zi.access_token;
        this.signup('',id,email,token);
    }
    responseFacebook(response){
        console.log(response);
        this.loadState();
        console.log(this.state);
        let email = response.email;
        let id = response.id;
        let token = response.accessToken;
        if(this.state.state==="login"){
            this.login(id,"",email,token,"")
        }
        else {
            this.signup(id, '', email, token);
        }
    }
    login(facebook,google,email,token,password){
        let data = {
            email: email,
            password: password,
            facebook: facebook?facebook:'',
            google: google?google:'',
            token: token?token:''
        };

        sendRequest('/controller/login.php',data).then((data)=>{
            if(data.status===200){
                // this.redirect();
            }
        });
    }
    loginButton(){
        this.login("","",this.state.email,"",this.state.password);
    }
    signup(facebook,google,email,token){
        let data = {
            name: this.state.name,
            email: email,
            phone: this.state.phone,
            location: this.state.location?this.state.location:'',
            tags: JSON.stringify(this.state.selectedTags),
            password: this.state.password,
            facebook: facebook?facebook:'',
            token: token?token:''
        };

            sendRequest('/controller/signup.php',data).then((data)=>{
                if(data.status===200){
                    this.redirect();
                }
            });
    }


    changeValue(id,value){
        var obj = {};
        obj[id] = value;
        this.setState(obj);
    }

    changeState(state){
        localStorage.setItem('data',JSON.stringify(this.state));
        this.setState({state: state})
    }

    updateTask(tag){
        var index = this.state.selectedTags.indexOf(tag);
        var selected = this.state.selectedTags;
        if(index>-1){
            selected.splice(index,1);
            this.setState({selectedTags: selected});
        }else{
            selected.push(tag);
            this.setState({selectedTags: selected});
        }
    }

    isSelected(tag){
        var index = this.state.selectedTags.indexOf(tag);
        if(index>-1){
            return true;
        }else{
            return false;
        }
    }

    clientSubmit(){
        let data = {name: this.state.name, email: this.state.email, phone: this.state.phone};
        sendRequest('/controller/client_lead.php',data).then((data)=>{
            if(data.status===200){
                this.changeState("tags");
            }
        });
    }

    vaSubmit(){
        let data = {name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location,
            qualification: this.state.qualification,
            experience: this.state.experience,
            skills: this.state.skills,
            more: this.state.more};
        sendRequest('/controller/va_lead.php',data).then((data)=>{
            if(data.status===200){
                this.changeState("va-done");
            }
        });
    }

    signup(socialData){
        let data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location?this.state.location:'',
            tags: JSON.stringify(this.state.selectedTags),
            password: this.state.password,
            social: socialData?socialData:''
        };
        sendRequest('/controller/signup.php',data).then((data)=>{
            if(data.status===200){
                this.changeState("redirect");
            }
        });
    }


    signupAction(){
        var selected = this.state.selectedTags;
        selected.push(this.state.newtag);
        this.setState({selectedTags: selected});
        this.changeState("signup");
    }

    render(){
        //<Link to='/'>Home</Link>
        return (
            <div className="login-container">
            <div className="container">
                <div className="uContainer">
                    <div className="mainContainer">
                        <div className="">
                            <div className="row">
                                <div className="navContainer col-sm-4">
                                    <div className="nav-container">
                                        <h2 className="heading">
                                            Need help?
                                        </h2>
                                        <hr/>
                                        <div className="link">
                                        <a>Support</a>
                                        </div>
                                        <div className="link">
                                            <a>Forgot Password</a>
                                        </div>

                                    </div>
                                </div>
                                <div className="inputContainer col-sm-8">

                                    <i className="fas fa-times close-button "></i>
                                    <div className="header-logo form-logo-visible">
                                        <img src={require('../../assets/resources/logo.png')} height="23px"/> Wishup
                                    </div>


                                    {this.state.state === 'initial' ?
                                        <form>
                                        <h2 className="heading">
                                            Get Started
                                        </h2>
                                        <hr/>
                                        <CustomInput label="Your Full Name" type="text" id="name" data={this.state.name} changeValue={this.changeValue.bind(this)}/>
                                        <CustomInput label="Email Address" type="email" id="email" data={this.state.email} changeValue={this.changeValue.bind(this)}/>
                                        <CustomInput label="Phone" type="phone" id="phone" data={this.state.phone} changeValue={this.changeValue.bind(this)}/>
                                        <div className="buttonsContainer">
                                            <div className="button-cta" onClick={()=>{this.clientSubmit()}}>Hire VA</div>
                                            <div className="button-cta va-button" onClick={()=>{this.changeState("va")}}>Become VA</div>
                                        </div>
                                    </form> : ''}


                                    {this.state.state === 'va' ?
                                        <form>
                                            <h2 className="heading">
                                                More Details
                                            </h2>
                                            <hr/>
                                            <CustomInput label="Based out of" type="text" id="location" data={this.state.location} changeValue={this.changeValue.bind(this)}/>
                                            <CustomInput label="Highest Qualification" type="text" id="qualification" data={this.state.qualification} changeValue={this.changeValue.bind(this)}/>
                                            <CustomInput label="Total Work Experience" type="text" id="experience" data={this.state.experience} changeValue={this.changeValue.bind(this)}/>
                                            <CustomInput label="Skills" type="text" id="skills" data={this.state.skills} changeValue={this.changeValue.bind(this)}/>
                                            <CustomInput label="Tell us more" type="text" id="more" data={this.state.more} changeValue={this.changeValue.bind(this)}/>
                                            <div className="buttonsContainer">
                                                <div className="button-cta" onClick={()=>{this.vaSubmit()}}>Submit</div>
                                            </div>
                                        </form> : ''}

                                    {this.state.state === 'va-done' ?
                                        <div>
                                            <h2 className="heading">
                                                More Details
                                            </h2>
                                            <hr/>
                                            <div>We eill look</div>


                                            </div>
                                         : ''}
                                    {this.state.state === 'tags' ?
                                    <form>
                                        <h2 className="heading">
                                            Types of services you want
                                        </h2>
                                        <hr/>
                                        <div className="tags">
                                            {this.tags.map((tag, i) => {
                                                // Return the element. Also pass key
                                                return (<div className={this.isSelected(tag)?"completed tag":"tag"} onClick={()=>{this.updateTask(tag)}}>{tag}</div>)
                                            })}

                                            <div className="tag" onClick={()=>this.setState({otherTag: true})}>Others </div>
                                            {this.state.otherTag ?
                                            <CustomInput label="Please enter separated by comma" type="text" id="newtag" data={this.state.newtag} changeValue={this.changeValue.bind(this)}/> : ''}
                                        </div>
                                        <div className="buttonsContainer">
                                            <div className="button-cta" onClick={()=>{this.signupAction()}}>Next</div>

                                        </div>
                                    </form> : ''}


                                    {this.state.state === 'login' ?
                                    <form>
                                        <h2 className="heading">
                                            Login
                                        </h2>
                                        <hr/>
                                        <CustomInput label="Email Address" type="email" id="email" data={this.state.email} changeValue={this.changeValue.bind(this)}/>
                                        <CustomInput label="Enter the password" type="password" id="password" data={this.state.password} changeValue={this.changeValue.bind(this)}/>

                                        <hr/>
                                        <div className="buttonsContainer">

                                            {/*<LinkedIn*/}
                                                {/*clientId='xxx'*/}
                                                {/*callback={this.callbackLinkedIn}*/}
                                                {/*text='LinkedIn' />*/}

                                            <GoogleLogin
                                                clientId="1037355421362-u192pai9brpfs6o6kppg33tedcqcrb88.apps.googleusercontent.com"
                                                buttonText="Login"
                                                onSuccess={this.responseGoogle.bind(this)}
                                                onFailure={this.responseGoogle}
                                            />


                                            <FacebookLogin
                                                appId="2217954758472006"
                                                autoLoad={true}
                                                fields="name,email,picture"
                                                onClick={()=>{this.componentClicked}}
                                                callback={this.responseFacebook.bind(this)}
                                            />

                                                {/*<a href="#" className="social-button" id="google-connect"> <span>Signup with Google</span></a>*/}
                                            {/*/!*<LinkedIn*!/*/}
                                                {/*/!*clientId="81ox2ce8b5cku1"*!/*/}
                                                {/*/!*onFailure={this.handleFailure}*!/*/}
                                                {/*/!*onSuccess={this.handleSuccess}*!/*/}
                                                {/*/!*redirectUri="http://localhost:8080/login"*!/*/}
                                            {/*/!*>*!/*/}
                                                {/*<a href="#" className="social-button" id="linkedin-connect"> <span>Signup with LinkedIn</span></a>*/}
                                            {/*</LinkedIn>*/}


                                        </div>
                                        <div className="buttonsContainer">
                                            <div className="button-cta" onClick={()=>this.loginButton()}>Next</div>

                                        </div>
                                    </form> : ''}

                                    {this.state.state === 'signup' ?
                                        <form>
                                            <h2 className="heading">
                                                Last Step
                                            </h2>
                                            <hr/>
                                            <CustomInput label="Email Address" type="email" id="email" data={this.state.email} changeValue={this.changeValue.bind(this)}/>

                                            <CustomInput label="Enter the password" type="password" id="password" data={this.state.password} changeValue={this.changeValue.bind(this)}/>

                                            <hr/>
                                            <div className="buttonsContainer">

                                                <GoogleLogin
                                                    clientId="1037355421362-u192pai9brpfs6o6kppg33tedcqcrb88.apps.googleusercontent.com"
                                                    buttonText="Login"
                                                    onSuccess={this.responseGoogle.bind(this)}
                                                    onFailure={this.responseGoogle}
                                                />


                                                <FacebookLogin
                                                    appId="2217954758472006"
                                                    autoLoad={true}
                                                    fields="name,email,picture"
                                                    onClick={()=>{this.componentClicked}}
                                                    callback={this.responseFacebook.bind(this)} />


                                            </div>
                                            <div className="buttonsContainer">
                                                <div className="button-cta" onClick={()=>this.signup()}>Next</div>

                                            </div>
                                        </form> : ''}

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default LoginCard;
