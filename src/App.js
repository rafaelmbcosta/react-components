import React from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

function App() {
  state = {
    userName: 'Xaveco'
  }

  return (
    <div className="App">
        <UserInput username="Monica" />
        <UserOutput username="Magali" />
        <UserOutput username="Cascão" />
        <UserOutput username="Cebolinha" />
        <hr/>
        <h3> Assignments </h3>
        <ol>
          <li><del>Create TWO new components: UserInput and UserOutput</del></li>
          <li><del>UserInput should hold an input element, UserOutput two paragraphs</del></li>
          <li><del>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</del></li>
          <li><del>Pass a username (of your choice) to UserOutput via props and display it there</del></li>
          <li><del>Add state to the App component (=> the username) and pass the username to the UserOutput component</del></li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
    </div>
  );
}

export default App;
