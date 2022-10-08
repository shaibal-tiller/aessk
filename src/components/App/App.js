import { BrowserRouter,  } from 'react-router-dom';
import Router from './Router';
import '../../styles/App.css'
import AppContext from './Context';
function App() {
  return (
    <AppContext.Provider  value={""}>
      <BrowserRouter>
        <div className="App">
          <Router />
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
