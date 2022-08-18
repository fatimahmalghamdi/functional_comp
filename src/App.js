import logo from './logo.svg';
import './App.css';
import PersonalCrad from './components/PersonalCard';
import React from 'react';

function App() {
  const [personInfo, serPersonInfo] = React.useState([
    {id: 1, fName: "Fatimah", lName: "Alghamdi", age: 11, hairColor: "Brown"},
    {id: 1, fName: "Sahab", lName: "Alghamdi", age: 22, hairColor: "Black"}
  ]);

  return (
    <div className="App">
      {personInfo.map((person) => <PersonalCrad key={person.id} person={person}
        />
      )}
    
    </div>
  );
}

export default App;
