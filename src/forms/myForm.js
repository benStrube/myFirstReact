import React from 'react';

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            age: null,
            errormessage: '',
            textAreaValue: '',
            mycar: 'Volvo',
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username)
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam === "age") {
            if (val !="" && !Number(val)) {
                err = <strong>Your age must be a number</strong>
            }
        }
        this.setState({errormessage: err});
        this.setState({[nam]: val});
    }
    render() {
        let header = '';
        if (this.state.username) {
            header = <h1>Hello {this.state.username} {this.state.age}</h1>
        } else {
            header = '';
        }
        return (
            <form style={{border:'2px solid black', width: '500px'}} onSubmit={this.mySubmitHandler}>
                <p>Enter your name:</p>
                <input 
                type='text'
                name='username'
                onChange={this.myChangeHandler}
                />
                <p>enter your age:</p>
                <input
                type='text'
                name='age'
                onChange={this.myChangeHandler}
                />
                <div style={{color:"red"}}>{this.state.errormessage}</div>
                <p>Enter value: </p>
                <textarea 
                style={{}}
                name="textAreaValue" 
                value={this.state.textAreaValue}
                onChange={this.myChangeHandler}
                rows={5}
                cols={25} />
                <br/>
                <select value={this.state.mycar}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
                <br/>
                <br/>
                <input type='submit' />
            </form>
        );
    }
}

export default MyForm;