import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Aakash', age:23 },
      { name: 'Gaurav', age:23 }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked !');
    // DON'T DO THIS: this.state.persons[0] = 'AakashChaudhari';
    this.setState({
      persons:[
        { name: newName, age:23 },
        { name: 'Gaurav', age:22 }
      ] 

    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        { name: 'Aakash', age:23 },
        { name: event.target.value, age:22 }
      ] 

    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1> Hello </h1>
        <p>This is really working.</p>
        <button style = {style}
        onClick={() =>this.switchNameHandler('Aakash!!')} >Switch Name</button>
        <Person name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click = {this.switchNameHandler.bind(this,'Aakash!')}>My Hobbies: Painting</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
        changed = {this.nameChangeHandler}/>
      </div>
    );


    //return React.createElement('div',{className: 'App'}, React.creatElement('h1',null'hiiiii'));
  }
}
 export default App;


//----------------This is for useState Hook--------------------------
// import React, { useState } from 'react';


// const app = () => {
//   const [personState, setPersonState] = useState(
//     {
//       persons: [
//         { name: 'Aakash', age: 23 },
//         { name: 'Gaurav', age: 23 }
//       ]
//     }
//   );

//   const switchNameHandler = () => {
//     //console.log('Was clicked !');
//     // DON'T DO THIS: this.state.persons[0] = 'AakashChaudhari';
//     this.setState({
//       persons: [
//         { name: 'AakashChaudhari', age: 23 },
//         { name: 'Gaurav', age: 22 }
//       ]

//     });
  
// };

//   return (
//     <div className="App">
//       <h1> Hello </h1>
//       <p>This is really working.</p>
//       <button onClick={this.switchNameHandler}>Switch Name</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age}>My Hobbies: Painting</Person>
//       <Person name={personState.persons[1].name} age={personState.persons[1].age} />
//     </div>
//   );


//   //return React.createElement('div',{className: 'App'}, React.creatElement('h1',null'hiiiii'));
// }

//export default app;


