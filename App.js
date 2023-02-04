
import { useState } from 'react';
import MainSection from './MainSection';
import './App.css';
import SideNav from './SideNav';

function App() {
  const [active,setActive] = useState("INBOX")
  return (
    <div id='main'>
      <h1>TODO Application</h1>
      <header>
        <div className="row">
          <div className="col-md-2">
            <SideNav change={setActive}/>
          </div>
          <div className="col-md-10">
            <MainSection active={active}/>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
