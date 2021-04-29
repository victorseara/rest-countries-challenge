import { useState, useEffect } from 'react';
import logo from './logo.svg';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const htmlEl = document.querySelector('html');
    if (!isDarkMode) {
      htmlEl?.classList.remove('dark');
      htmlEl?.classList.add('light');
    } else {
      htmlEl?.classList.remove('light');
      htmlEl?.classList.add('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="text-center h-screen dark:bg-dark-blue">
      <header className="h-full flex flex-col items-center justify-center text-2xl dark:text-white">
        <img
          src={logo}
          className="h-1/3 pointer-events-none animate-spin-demo"
          alt="logo"
        />
        <p>Welcome 👋</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="dark:text-yellow-50"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <label htmlFor="theme" className="my-4">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={e => setIsDarkMode(e.target.checked)}
            className="mr-2"
          />
          Dark mode
        </label>
      </header>
    </div>
  );
}

export default App;
