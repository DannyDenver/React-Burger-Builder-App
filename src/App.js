import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'danny', age: 28 },
      { name: "CJ", age: 30 },
      { name: "Stephanie", age: 27 }
    ]
  });

  // can use multiple useStates; useState hook
  const [ zodiacSigns, zodiacSignsState ] = useState('gemini');

  const switchNameHandler = (newName = "") => {
    let clonedPeople = [...personsState.persons];
    let currentIndex = clonedPeople.length;
    console.log('howdy')

    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      let temporaryValue = clonedPeople[currentIndex];
      clonedPeople[currentIndex] = clonedPeople[randomIndex];
      clonedPeople[randomIndex] = temporaryValue;
    }

    if (newName && clonedPeople) {
      clonedPeople[0].name = newName;
    }

    // does not merge; replaces old state; must add other properties
    setPersonsState({persons: [...clonedPeople]});
  }

  const nameChangedHandler = (event = null) => {
    if (!event) return;

    setPersonsState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: "CJ", age: 30 },
        { name: "Stephanie", age: 27 }
      ]
    });
  }

  return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => switchNameHandler()}>Switch Name</button>

        <Person 
          name={personsState.persons[0].name}
         age={personsState.persons[0].age}
         click={() => switchNameHandler("Susi")}
         changed={nameChangedHandler}
         />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} 
        click={ () => switchNameHandler("Jenn")}>I like to swim. </Person>

        {zodiacSigns}
      </div>
  );

  }

export default app;
