import { useEffect, useState } from 'react';
import './App.css';

const { io } = require('socket.io-client');
const socket = io.connect("https://glow-websocket-server.herokuapp.com");


function App() {

  const [gyroY, setGyroY] = useState(0.0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    socket.on("timeCallback", (data) => {
      setGyroY(data);
      //console.log(gyroY);
      setTime(time + gyroY);
      console.log(time);
    })
  })



  return (
    <div className="App">
      {time < -1.2? <img src={require('./images/eindhoven-station-1866.jpg')} alt="eindhoven-station" ></img> : <></> }
      {time > -1.2 && time < 1.2? <img src={require('./images/eindhoven-station-1916.jpg')} alt="eindhoven-station" ></img> : <></> }
      {time > 1.2? <img src={require('./images/eindhoven-station-1955.jpg')} alt="eindhoven-station" ></img> : <></> }
    </div>
  );
}

export default App;
