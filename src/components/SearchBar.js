import { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [city, setCity] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        onSubmit({ city });
        setCity('');
      }}
      className="ui form">
      <div className="ui category search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search city"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    </form>
  );
};

export default SearchBar;
