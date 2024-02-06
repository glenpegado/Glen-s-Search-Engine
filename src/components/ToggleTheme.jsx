import { useGlobalContext } from '../context/context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

function ToggleTheme() {
  // Context
  const { isDarkMode, toggleDarkMode } = useGlobalContext();

  // RETURN
  return (
    <section className='toggle-container'>
      <button onClick={toggleDarkMode} className='dark-toggle'>
        {!isDarkMode ? (
          <BsFillSunFill className='toggle-icon' />
        ) : (
          <BsFillMoonFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
}

export default ToggleTheme;
