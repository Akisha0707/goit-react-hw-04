import css from '/src/components/SearchBar/SearchBar.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    if (evt.target.elements.message.value.trim() === '') {
      toast.error('Add some text');
      return;
    }

    onSearch(evt.target.elements.message.value);

    evt.target.reset();
  };

  return (
    <header className={css.headerSearch}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.inputSearch}
          type="text"
          name="message"
          placeholder="Search images and photos"
        />
        <button className={css.buttonSearch} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
