import React, { useEffect, useState } from 'react';
import './style.css';

const CityOptions = ({ cities }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => (
        <option key={city.code} value={city.code}>
          {city.name}
        </option>
      ))}
    </>
  );
};

const DatesOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map((date) => (
        <option key={date.dateBasic} value={date.dateBasic}>
          {date.dateCs}
        </option>
      ))}
    </>
  );
};

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);
  // console.log(dates);

  useEffect(() => {
    // Fetch cities
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/cities`)
      .then((response) => response.json())
      .then((data) => {
        setCities(data.results);
      });

    // Fetch date
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/dates`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDates(data.results);
      });
  }, []);

  // console.log(cities);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Jedeme z města ${fromCity} do ${toCity} a chceme jet ${date}`);
  };

  const handleChangeFrom = (e) => {
    setFromCity(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeTO = (e) => {
    setToCity(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form onSubmit={handleSubmit} className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>

            <select value={fromCity} onChange={handleChangeFrom}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select value={toCity} onChange={handleChangeTO}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select value={date} onChange={handleChangeDate}>
              <option value="">Vyberte</option>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
