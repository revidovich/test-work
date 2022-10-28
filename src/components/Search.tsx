import React, { useState } from "react";
import fetchData from "./Api";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = () => {
    fetchData
      // .search(searchQuery)
      .then((data) => {
        console.log(data);
        setSearchQuery('');
      })
      .catch((err) => console.log("Ошибка поискового запроса"));
  }

  function handleFormSubmit (event) {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      setSearchQuery('');
    } else {
      handleSubmit();
    }
  }
  return (
    <form noValidate onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="search-form__input"
        placeholder='Поиск бренда, товара, категории'
        required
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <label className="search-form__label" />
      <button type="submit" className="search-form__search-button">
        Искать
      </button>
    </form>
  );
};