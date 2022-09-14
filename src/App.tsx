import React, { useState } from 'react';
import { Wrapper } from './components/Wrapper/Wrapper';
import mainImg from './assets/mainImg.jpg';
import { Search } from './components/Search/Search';
import { Card } from './components/Card/Card';
import { LeftView } from './components/LeftView/LeftView';
import { WeatherTable } from './data/data.model';

function App() {
  const API_KEY = 'ed97c2b2d0fadf364021895b64b9faaa';
  const [weatherInfo, setWeatherInfo] = useState<WeatherTable>();
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=New-York`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        setError("Sorry we can't find this place");
        return;
      } else {
        setWeatherInfo(data as WeatherTable);
      }
    });

  console.log(weatherInfo);
  return (
    <Wrapper>
      <LeftView />
      <Card />
    </Wrapper>
  );
}

export default App;
