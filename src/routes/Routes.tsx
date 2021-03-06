import Loader from 'components/Loader/Loader';
import React, { Suspense, useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';

const Home = React.lazy(() => import('pages/Home/Home'));
const CountryDetails = React.lazy(
  () => import('pages/CountryDetails/CountryDetails')
);

type UserTheme = 'light' | 'dark';

function Router() {
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
    <HashRouter basename="/">
      <div className="flex flex-col w-full dark:bg-dark-blue bg-light-gray min-h-screen text-very-dark-blue dark:text-white">
        <Header title="Where in the world ?" toggleTheme={toggleTheme} />
        <div className="h-full w-10/12 max-w-screen-2xl flex flex-col self-center mt-20">
          <main className="h-full">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:countryCode" element={<CountryDetails />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

export default Router;
