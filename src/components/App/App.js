import { BrowserRouter,  } from 'react-router-dom';
import Router from './Router';
import '../../styles/App.css'
import AppContext from './Context';
import { useState } from 'react';
function App() {
   const date= new Date();
    const tempDate = `${date.getDate() < 10 ? "0" : ""}${date.getDate()}/${date.getMonth() + 1 < 10 ? "0" : ""}${date.getMonth() + 1}/${date.getFullYear()}`
  //  console.log(tempDate);
  const [userData,setUserData]= useState({'Registration Date':tempDate,})
  
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
