import React, { useEffect, useState } from 'react';
import { Wrapper } from './components/Wrapper/Wrapper';
import mainImg from './assets/mainImg.jpg';
import { Search } from './components/Search/Search';
import { Card } from './components/Card/Card';
import { LeftView } from './components/LeftView/LeftView';
import { WeatherTable } from './data/data.model';

function App() {
  const API_KEY = 'a69bd4c5d950896c8f16c9705c07c617';
  const [weatherInfo, setWeatherInfo] = useState<WeatherTable>();
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${search}`)
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
    console.log('Tried to find', search);
  }, [clicked]);

  return (
    <Wrapper>
      <LeftView />
      <Card
        country={weatherInfo?.location.country}
        region={weatherInfo?.location.region}
        localtime={weatherInfo?.location.localtime}
        temperature={weatherInfo?.current.temperature}
        weather_descriptions={weatherInfo?.current.weather_descriptions}
        weather_icons={weatherInfo?.current.weather_icons[0]}
        city={weatherInfo?.location.name}
        onClick={() => setClicked(!clicked)}
        setSearch={setSearch}
      />
    </Wrapper>
  );
}

export default App;
