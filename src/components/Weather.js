import { useEffect, useState } from 'react';
import weatherapi from './apis/weatherapi';
import List from './List';
import SearchBar from './SearchBar';

const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      onSearchReq({ long_lat: `${coords.latitude},${coords.longitude}` });
    });
  }, []);

  const onSearchReq = async ({ city, long_lat }) => {
    if (!city && !long_lat) return;

    const {
      data: { current },
      data: { location },
    } = await weatherapi.get('/current.json', {
      params: {
        q: long_lat ?? city,
      },
    });

    const result = { ...current, ...location };
    setWeatherInfo([result]);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'min(40vw, 500px)',
        margin: '0 auto',
      }}>
      <SearchBar onSubmit={onSearchReq} />
      <List items={weatherInfo} />
    </div>
  );
};

export default Weather;
