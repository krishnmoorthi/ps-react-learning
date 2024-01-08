import './App.css';
import Weather from './components/weather/Weather';
import User from './components/user/User';
import ClassGreet from './components/greet/ClassGreet';
import Counter from './components/counter/Counter';
import { useState } from 'react';

const date = new Date();
const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = weekdayNames[date.getDay()];
const weatherData = {
  day: dayOfWeek,
  condition: "Sunny",
  temprature: "22°C"
};

  const defaultUserName = 'Krishnamoorthi Thangavel';


function App() {
  const [userData, setUserData] = useState({
    name: defaultUserName,
    subject: 'ReactJs Weather Component project'
  });

   /* Function to check the state of the object get changed when event occurs */
  const updateUserName = e => {
    setUserData({
        ...userData,
        name: e.target.value !== '' ? e.target.value : defaultUserName
        });
  };

  return (
    <div className="App">
      <header className="App-header" >
        <Weather weatherData={weatherData} />
        <User userData={userData} />
      </header>
      <section>
        <ClassGreet title="TGA Program" />
        <Counter />
        {/* Event learning */}
        <div>
          <h3>Event Learning to change user name</h3>
          <form>
            <input type="text" placeholder='enter your name' onChange={updateUserName}/>
          </form>
        </div>
      </section>
      <footer className='App-footer'>
        <h3>PS SFCC TGA UNext Training</h3>
      </footer>
    </div>
  );
}

export default App;
