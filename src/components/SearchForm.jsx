import { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context/context';

function SearchForm() {
  // context
  const { setSearch } = useGlobalContext();

  // useRef
  let refContainer = useRef(null); // {current: null}

  // useEffect
  useEffect(() => {
    refContainer.current.focus();
  }, []);

  //FUNCTION handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    let searchValue = e.target.elements.search.value; // get input

    if (!searchValue) return; // if empty return
    setSearch(searchValue);
    e.target.elements.search.value = ''; //set empty
  };

  //RETURN
  return (
    <section>
      <h1 className='title'>unsplash image</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='Search here...'
          className='form-input search-input'
          ref={refContainer}
        />
        <button type='submit' className='btn'>
          click
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
