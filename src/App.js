import React from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {Orginals,Action,Comedy,Horror,Romance,Documentries} from './urls'
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url = {Orginals} title = 'Netflix Orginals'/>
      <RowPost url = {Action} title = 'Action' isSmall/>
      <RowPost url = {Comedy} title = 'Comedy' isSmall/>
      <RowPost url = {Horror} title = 'Horror' isSmall/>
      <RowPost url = {Romance} title = 'Romance' isSmall/>
      <RowPost url = {Documentries} title = 'Documentries' isSmall/>
    </div>
  );
}

export default App;
