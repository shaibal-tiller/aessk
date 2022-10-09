import { BrowserRouter,  } from 'react-router-dom';
import Router from './Router';
import '../../styles/App.css'
import AppContext from './Context';
import { useState } from 'react';
function App() {
  
  const [userData,setUserData]= useState({})
  
  const contextData= {
    userData,
    setUserData,
  }

  return (
    <AppContext.Provider  value={contextData}>
      <BrowserRouter>
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
