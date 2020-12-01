import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
          error: null,
          isLoaded: false,
          items: [],
          flag:0
        };
  }

MyPOSTAPI=()=>{

  // var registerDict = {name:'Waqas',email:'waqastariq1414@gmail.com',pass:'123456'};

  var name = document.getElementById("name").nodeValue;
  var rollnum = document.getElementById("rollnum").nodeValue;
  var email = document.getElementById("email").nodeValue;
  var phone = document.getElementById("phone").nodeValue;
  var age = document.getElementById("age").nodeValue;

  var dict = { name: name, rollnum : rollnum, email : email, phone : phone, age : age };

  axios.post('https://jsonplaceholder.typicode.com/posts',dict)
  .then(response => {
    console.log(response)
    this.setState({isLoaded:true,
                    flag:1
                  })
  })
  .catch(error => {
    alert(error);
    console.log(error);
  })

}

  render() {

    const { error, isLoaded, items } = this.state;

    if (this.state.flag == 0){

      return(
      <div>
        <label>Name</label><input type="text" id="name"></input><br></br>
        <label>Roll no</label><input type="text" id="rollnum"></input><br></br>
        <label>Email</label><input type="email" id="email"></input><br></br>
        <label>Phone£</label><input type="number" id="phone"></input><br></br>
        <label>Age</label><input type="age" id="age"></input><br></br>
      <button onClick={this.MyPOSTAPI}>
      Register
      </button>

      </div>

      );

    }else{

      return(

      <div>
      <button onClick={this.MyPOSTAPI}>
      Register
      </button>

      <h1> AgentSpy108 Post Request is Submitted Successfully</h1>

      </div>

      );
    }

  }

  componentDidMount() {

    }
}

export default App;
