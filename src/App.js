import './App.css';
import Weather from './components/weather/Weather';
import User from './components/user/User';
import ClassGreet from './components/greet/ClassGreet';

const date = new Date();
const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayOfWeek = weekdayNames[date.getDay()];
const weatherData = {
    day: dayOfWeek,
    condition: "Sunny",
    temprature: "22°C"
};
const userData = {
    name: 'Krishnamoorthi Thangavel',
    subject: 'ReactJs Weather Component project'
}

function App() {
    return (
        <div className="App">
            <header className="App-header" >
                <Weather weatherData={weatherData} />
                <User userData={userData} />
                <ClassGreet title="TGA Program"/>
            </header>
        </div>
    );
}

export default App;
