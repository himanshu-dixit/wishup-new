import React, {Component} from 'react';
import HeaderBar from './components/HeadBar';
// import NavBar from './components/NavBar';
import Footer from './components/Footer';

// import Main from './Main';

class App extends Component {
    constructor() {
        super()
        var name = localStorage.getItem("name");
        var id = localStorage.getItem("id");
        var timer = localStorage.getItem("timer");
        var answers = localStorage.getItem("answers")?JSON.parse(localStorage.getItem("answers")):{};
        var active = false;
        if(name && id){
             active = true;
        }
        if(!answers){
            answers= {};
        }
        if(!timer){
            timer = 1200;
        }
        this.state = {name: name, id: id, active: active, answers:answers, timer: timer};
        if(name && id ){
            this.startTest()
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeID = this.handleChangeID.bind(this);
    }


    handleChangeName(e) {
        this.setState({name: e.target.value});
    }

    handleChangeID(e) {
        this.setState({id: e.target.value});
    }

    startTest() {
        this.setState({active: true});
        localStorage.setItem("name", this.state.name);
        localStorage.setItem("id", this.state.id);
        localStorage.setItem("active", true);
        this.interval = setInterval(() => {
            this.setState({timer: this.state.timer - 1});
            localStorage.setItem("timer", this.state.timer);
            if(this.state.timer<1){

                this.endTest();


            }
        }, 1000);
    }

    saveAnswer(id,value) {
        var answers = this.state.answers;
        answers[id] = value;
        this.setState({answers: answers});
        localStorage.setItem("answers", JSON.stringify(this.state.answers));
    }


    checkAnswer(id,value) {
        var answers = this.state.answers;
        if(answers[id] == value){
            return true
        }
        else{
            return false
        }
    }

    endTest(){
        if(this.state.timer > 1){
            var submitCheck = window.confirm("You willn't be able to make further changes.");
            if(submitCheck===false){
                return;
            }
        }
        clearInterval(this.interval);
        alert("The test has been submitted succesfully")
        this.setState({active: false, name: '', id: '', answers: {}, timer: 1200});
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST","http://shayjuice.com/test.php");
        xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
        xmlhttp.send("answers="+JSON.stringify(this.state.answers)+"&id="+this.state.id+"&name="+this.state.name);
        localStorage.setItem("active", false);
        localStorage.setItem("name", '');
        localStorage.setItem("id", '');

        localStorage.setItem("timer", 1200);
        localStorage.setItem("answers", '');

    }

    render() {
        var that = this;
        var data = {
            questions: [
                {
                    id: 1,
                    question: 'If 17,5,4,1 = 80, and 13,9,8,6 = 103, then 15,7,5,9 = ?',
                    answers: ['88', '78', '98', '91']
                },
                {
                    id: 2,
                    question: 'Two students appeared at an examination. One of them secured 10 marks more than the other and his\n' +
                        'marks was 60% of the sum of their marks. What are the marks obtained by them?',
                    answers: ['20,30', '40,30', '44,34', '40,50']
                },
                {
                    id: 3,
                    question: 'A sum of money at simple interest amounts to Rs. 575 in 3 years and to Rs. 600 in 4 years. The sum is:',
                    answers: ['Rs. 510', 'Rs. 550', 'Rs. 540', 'Rs. 500']
                },
                {
                    id: 4,
                    question: 'X starts a business with Rs.54000. Y joins in the business after 3 months with Rs.36000. What will be the ratio in\n' +
                        'which they should share the profit at the end of the year?',
                    answers: ['1:2', '2:1', '1:3', '3:1']
                },
                {
                    id: 5,
                    question: 'A earns more than B and less than C. D earns more than A and C. E earns more than only B. Who earns the\n' +
                        'least among the five of them?',
                    answers: ['E', 'D', 'B', 'C']
                },
                {
                    id: 6,
                    question: 'A train, 150 m long travels at a speed of 45 km/hr crosses a bridge in 20 sec. The length',
                    answers: ['170', '100', '135', '120']
                },
                {
                    id: 7,
                    question: 'If the length of a rectangle is reduced to one-third and its breadth is quadrupled, what is the percentage change in\n' +
                        'its area?',
                    answers: ['25% increase', '67% decrease', '50% decrease', '33% increase']
                },
                {
                    id: 8,
                    question: 'P is able to do a piece of work in 10 days and Q can do the same work in 12 days. If they can work together\n' +
                        'for 4 days, what is the fraction of work left?',
                    answers: ['4/15', '31/60', '17/30', '23/60']
                },
                {
                    id: 9,
                    question: 'If 4 × 3 = 25, and 6 × 7 = 85, then 8 × 5 =',
                    answers: ['65', '81', '93', '77']
                },
                {
                    id: 10,
                    question: 'A’s house is located to the north of B’s house. C’s house is located to the west of B’s house. M’s\n' +
                        'house is located to the south-west of B’s house and to the south-east of C’s house while D’s\n' +
                        'house is located to the north-west of C’s house. Then in which direction M’s house is located with\n' +
                        'respect to D’s house?',
                    answers: ['North-West', 'South-West', 'South-East', 'North-East']
                },
                {
                    id: 11,
                    question: 'Read the following information carefully and answer the next two questions.\n' +
                        'L$M means L is son of M, L*M means L is wife of M, L#M means L is mother of M and L@M means L is sister of M.\n' +
                        '\n' +
                        'What does A$B*C mean?',
                    answers: ['C is husband of A', 'C is father of A', 'B is father of A', 'C is brother of A']
                },
                {
                    id: 12,
                    question: 'What does A@B#C mean?',
                    answers: ['C is nephew of A', 'C is son of B', 'A is Aunt of C', 'B is father of C']
                },
                {
                    id: 13,
                    question: 'Find the missing number.',
                    image: 'https://i.imgur.com/0Ymq1Hp.png',
                    answers: ['16', '73', '76', '94']
                },
                {
                    id: 14,
                    question: 'A wizard named Nepo says "I am only three times my son\'s age. My father is 40 years more than my age.\n' +
                        'Together the three of us are a mere 106 years old." How old is Nepo?',
                    answers: ['24', '36', '32', '28']
                },
                {
                    id: 15,
                    question: 'A monkey starts climbing up a tree 17ft. tall. Each hour, it hops 3ft. and slips back 2ft. How much time would it\n' +
                        'take the monkey to reach the top?',
                    answers: ['16 Hours', '15 Hours', '17 Hours', '18 Hours']
                },
                {
                    id: 16,
                    question: 'What is the difference between the compound interests on Rs. 5000 for 1.5 years at 4% per annum compounded yearly and half-yearly?',
                    answers: ['Rs. 2.04', 'Rs. 4.80', 'Rs. 3.06', 'Rs. 8.30']
                },
                {
                    id: 17,
                    question: 'In a row of girls, Seema is eighth from the left and Reema is seventeenth from the right. If they\n' +
                        'inter-change their places, Seema becomes fourteenth from the left. How many girls are there in\n' +
                        'that row?',
                    answers: ['30', '25', '29', '27']
                },
                {
                    id: 18,
                    question: 'Identify the figure that completes the pattern.',
                    image: 'https://i.imgur.com/gWuMbUJ.png',
                    answers: ['1', '3', '2', '4']
                },
                {
                    id: 19,
                    question: 'Introducing a man, a woman said, “He is the only son of my mother’s mother.” How is the woman\n' +
                        'related to that man?',
                    answers: ['Niece', 'Mother', 'Aunt', 'Sister']
                },
                {
                    id: 20,
                    question: 'Identify the figure that completes the pattern.',
                    image: 'https://i.imgur.com/DfXhZqQ.png',
                    answers: ['3', '1', '4', '2']
                },
            ]
        }
        return (
            <div>
                <div className="Header">
                    {that.state.active === false ?
                        <div className="container-fluid">
                            <div className="topnav">
                                <img src="https://www.wishup.co/categories/img/wishup-footer.png" height="30px"/>
                            </div>
                            <div className="form">
                                <div className="login">
                                    <h1>Hi There, to start the test please enter your name and allotted id</h1>
                                    <div>
                                        <p><input type="text" name="name" value="" placeholder="Name"
                                                  value={that.state.name} onChange={that.handleChangeName}></input>
                                            <p><input type="text" name="id" value="" placeholder="Alloted ID"
                                                      value={that.state.id} onChange={that.handleChangeID}></input></p>
                                            <div className="Info">
                                                Please have pen and paper ready with you. You'll be given 20 minutes time to attempt all the questions.
                                                Timer will start as soon as you press the start buttton
                                            </div>
                                            <p className="submit">
                                                <button className="submit-button" name="commit"
                                                        value="Start Test" onClick={() => {
                                                    that.startTest()
                                                }}>Start Test
                                                </button>
                                            </p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :

                        <div className="container-fluid">
                            <div className="topnav">
                                <img src="https://www.wishup.co/categories/img/wishup-footer.png" height="30px"/>
                            </div>
                            <div className="form">
                                <div className="questions">
                                    <h4>Please attempt the questions</h4>
                                    <p>Time remaining is <span className="timer"> {Math.floor(this.state.timer/60)}:{this.state.timer%60}</span></p>
                                    <div className="question">
                                        {
                                            data.questions.map((question) => {
                                                    var answers = question.answers.map((answer => {
                                                            return  <div className="radio">
                                                                <label>
                                                                    <input type="radio" value="option1" name={question.id} onClick={()=>{
                                                                    this.saveAnswer(question.id, answer)
                                                                    }
                                                                    }
                                                                           checked={this.checkAnswer(question.id, answer)}
                                                                    />
                                                                    {answer}
                                                                </label>
                                                            </div>
                                                        }
                                                    ))
                                                    return <div><h5><strong>{question.id}.)  {question.question}</strong>

                                                    </h5>
                                                        <div>
                                                            {question.image?    <img src={question.image} height="70px"/> : ''}
                                                        </div>
                                                        {answers}
                                                    </div>
                                                }
                                            )
                                        }
                                        <p className="submit">
                                            <button className="submit-button" name="commit"
                                                    value="Start Test" onClick={() => {
                                                that.endTest()
                                            }}>Submit Answers
                                            </button>
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </div>
                    }


                </div>
            </div>
        );
    }
}

export default App;
