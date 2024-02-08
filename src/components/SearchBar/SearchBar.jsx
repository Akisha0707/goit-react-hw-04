import css from '/src/components/SearchBar/SearchBar.module.css';

const SearchBar = () => {
  const handleSubmit = evt => {
    evt.preventDefault();

    // console.log(evt.target.elements);
    // if (evt.target.elements.query.value.trim() === '') {
    //   toast.error('lsdld');
    // }
  };

  return (
    <header className={css.headerSearch}>
      <form onSubmit={handleSubmit}>
        <input className={css.inputSearch} type="text" placeholder="Search images and photos" />
        <button className={css.buttonSearch} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
