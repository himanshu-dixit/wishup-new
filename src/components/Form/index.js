import React, {Component} from 'react';
import '../../styles/index.css';
import CustomInput from '../CustomInput';
import {loop} from 'react-icons-kit/ionicons/loop';
import './style.css';
import {sendRequest} from '../../services/server.js';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state =  {email: '', phone: '', action:'',state: props.type?props.type:'initial', selectedTags: [], otherTag: false, newtag: ''};
        this.tags = ['Social','Task'];
        localStorage.setItem('data',JSON.stringify(this.state));
    }

    loadState(){
        this.setState(JSON.parse(localStorage.getItem('data')));
    }
    next(){
        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone: this.state.phone
        };
        if(this.state.action==="become-va"){
            if(!data.email || !data.phone || !data.first_name || !data.last_name) {
                this.changeState("va");
            }else{
                this.setState({error: "Please enter all the data"});
            }
        }
        else{
            sendRequest('/controller/client_lead.php',data).then((data)=>{
                if(data.status===200){
                this.changeState("done");
                }
                else{
                    this.setState({error: data.message});
                }
            });
        }

    }
    redirect(){
        window.location.replace("/dashboard");
    }


    changeState(state){
        localStorage.setItem('data',JSON.stringify(this.state));
        this.setState({state: state})
    }

    changeValue(id,value){
        var obj = {};
        obj[id] = value;
        this.setState(obj);
    }

    clientSubmit(){
        let data = {name: this.state.name, email: this.state.email, phone: this.state.phone};
        sendRequest('/controller/client_lead.php',data).then((data)=>{
            if(data.status===200){
                this.changeState("tags");
            }
            else{
                this.setState({error: data.message});
            }
        });
    }

    vaSubmit(){
        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location,
            qualification: this.state.qualification,
            experience: this.state.experience,
            skills: this.state.skills,
            more: this.state.more
        };
        sendRequest('/controller/va_lead.php',data).then((data)=>{
            if(data.status===200){
                this.changeState("va-done");
            }
        });
    }





    render(){
        //<Link to='/'>Home</Link>
        var that = this;
        const handler = (status, value, countryData, number, id) => {
            this.setState({phone: number});
        };
        return (


                        <div className="new-form">
                            <div className="mainContainer">
                            <div className="row">

                                <div className="inputContainer col-sm-12">

                                    {this.state.state === 'initial' ?
                                        <form>
                                        <h2 className="heading">
                                            Get Started
                                        </h2>
                                        <hr/>
                                            <div className="name-bar">
                                        <CustomInput label="First Name" type="text" size="half" id="name" data={this.state.first_name} changeValue={this.changeValue.bind(this)}/>
                                        <CustomInput label="Last Name" size="half" type="text" id="name" data={this.state.last_name} changeValue={this.changeValue.bind(this)}/>
                                            </div>
                                            <div className="name-bar">
                                                <CustomInput label="Email Address"  type="email" id="email" data={this.state.email} changeValue={this.changeValue.bind(this)}/>
                                            </div>
                                            <div className="name-bar phone">
                                                <IntlTelInput
                                                    onPhoneNumberChange={handler}
                                                    preferredCountries={['US']}
                                                    css={['intl-tel-input', 'form-control']}
                                                />
                                           </div>
                                            <h4>What are you looking for?</h4>

                                            <div className="radio-group">
                                                <label className="container" onClick={()=>{this.setState({action: 'hire-va'})}}>Hire VA
                                                    <input type="radio" checked={this.state.action=="hire-va"||!this.state.action?"checked":""} name="radio"></input>
                                                        <span className="checkmark"></span>
                                                </label>
                                                <label className="container" onClick={()=>{this.setState({action: 'become-va'})}}>Become VA
                                                    <input type="radio" name="radio" checked={this.state.action=="become-va"?"checked":""} name="radio"></input>
                                                        <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        <div className="error">{this.state.error}</div>
                                        <div className="buttonsContainer">
                                            <div className="button-cta" onClick={()=>{that.next()}}>Next</div>
                                        </div>
                                    </form> : ''}


                                    {this.state.state === 'va' ?
                                        <form>
                                            <h2 className="heading">
                                                More Details
                                            </h2>
                                            <hr/>
                                            <CustomInput label="Based out of" type="text" id="location" data={this.state.location} changeValue={this.changeValue.bind(this)}/>
                                            <CustomInput label="Your highest qualification" type="text" id="qualification" data={this.state.qualification} changeValue={this.changeValue.bind(this)}/>
                                            <CustomInput label="Total work experience" type="text" id="experience" data={this.state.experience} changeValue={this.changeValue.bind(this)}/>
                                            <CustomInput label="Skills" type="text" id="skills" data={this.state.skills} changeValue={this.changeValue.bind(this)}/>
                                            <CustomInput label="Tell us more about you" type="text" id="more" data={this.state.more} changeValue={this.changeValue.bind(this)}/>
                                            <div className="error">{this.state.error}</div>
                                            <div className="buttonsContainer">
                                                <div className="button-cta" onClick={()=>{this.vaSubmit()}}>Submit</div>
                                            </div>
                                        </form> : ''}

                                    {this.state.state === 'va-done' ?
                                        <div>
                                            <h2 className="heading">
                                                Thank you
                                            </h2>
                                            <hr/>
                                            <div>We have succesfully received your details. Will contact you in next 3-4 days.</div>
                                            </div>
                                         : ''}

                                </div>
                            </div>

                        </div>
                    </div>

        );
    }
}

export default Form;
