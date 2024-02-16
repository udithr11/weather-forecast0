import React from 'react';

const WeatherCard = ({ location, temperature, weather, onDelete }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="p-4">
        <h2 className="text-xl font-semibold">{location}</h2>
        <p className="text-gray-600">{temperature}°C</p>
        <p className="text-gray-600">{weather}</p>
      </div>
      <div className="flex justify-end p-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default WeatherCard;
