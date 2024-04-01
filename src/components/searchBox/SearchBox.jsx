import css from './SearchBox.module.css';

export default function SearchBox({ inputValue, setInputValue }) {
  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className={css['input-cont']}>
      <label htmlFor="">Find contacts by name</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className={css['input-search']}
      />
    </div>
  );
}
