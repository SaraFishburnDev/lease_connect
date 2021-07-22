import React from 'react';
import CalendarPage from "./pages/calendar_page/CalendarPage"
import NewUser from './components/NewUser';
import './global.css'
import NewHouse from './components/NewHouse';


function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <h1>Lease Connect</h1>
        <NewUser/>
        <NewHouse />
      </header>

      <CalendarPage></CalendarPage>
    </div>
  );
}

export default App;
