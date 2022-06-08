import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Login from './components/Login/Login';
import Mail from './components/Mail/Mail';
import Main from './components/Main/Main';
import Notification from './components/Notification/Notification';
import Portion from './components/Portion/Portion';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <div className="App">
        <Routes >
          <Route path='/' element = {<Main />}/>
          <Route path='settings' element = {<Settings />} />
          <Route path='notification' element = {<Notification />} />
          <Route path='about' element = {<About />} />
          <Route path='mail' element = {<Mail />} />
          <Route path='portion' element = {<Portion />} />
          <Route path='login' element = {<Login />} />
        </Routes>
    </div>
  );
}

export default App;
