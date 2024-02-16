import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

const API_KEY = '99b04f642e6bf11f47129a45400bd310';
const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (cityName) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: cityName,
          appid: API_KEY,
        },
      });
      setWeatherData([...weatherData, response.data]);
      setLocation(''); 
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = (index) => {
    const newData = [...weatherData];
    newData.splice(index, 1);
    setWeatherData(newData);
  };

  return (
    <div className="bg-red-200 container mx-auto pt-8">
      <div className="mb-4 flex">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => fetchWeatherData(location)} 
        >
          Add
        </button>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex flex-wrap">
        {weatherData.map((data, index) => (
          <WeatherCard
            key={index}
            location={data.name}
            temperature={data.main.temp}
            weather={data.weather[0].main}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
