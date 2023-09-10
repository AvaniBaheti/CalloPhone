import logo from './logo.svg';
import './App.css';

import {Routes,Route}  from   'react-router-dom'
import Home from './compo/Home/Home';

import Room from './compo/Rooms/Room';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:roomid" element={<Room/>}/>
      </Routes>
    </div>
  );
}

export default App;
