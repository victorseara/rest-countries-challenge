import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import CountryDetails from '../pages/CountryDetails/CountryDetails';
import Home from '../pages/Home/Home';

type UserTheme = 'light' | 'dark';

const Routes = () => {
  const [userTheme, setUserTheme] = useState<UserTheme>('light');

  useEffect(() => {
    const theme = localStorage.getItem('theme') as UserTheme;

    if (!theme) {
      localStorage.setItem('theme', 'light');
    }

    if (theme === 'dark') {
      setUserTheme('dark');
      document.querySelector('html')?.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (userTheme === 'dark') {
      setUserTheme('light');
      document.querySelector('html')?.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setUserTheme('dark');
      document.querySelector('html')?.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };
  return (
    <BrowserRouter basename="/countries-rest-api-with-theme-switcher">
      <div className="flex flex-col w-full dark:bg-dark-blue bg-light-gray min-h-screen text-very-dark-blue dark:text-white">
        <Header title="Where in the world ?" toggleTheme={toggleTheme} />
        <div className="h-full w-10/12 max-w-screen-2xl flex flex-col self-center mt-20">
          <main className="h-full">
            <Route path="/" exact component={Home} />
            <Route path="/:countryCode" component={CountryDetails} />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
