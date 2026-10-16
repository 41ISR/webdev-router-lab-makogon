import { useState } from 'react';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import MoviePage from './pages/MoviePage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { movies, genres } from './data/movies.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />}/>
          <Route path="search" element={<SearchPage />}/>
          <Route path="movie" element={<MoviesPage />}/>
          <Route path="contacts" element={<ContactsPage />}/>
          <Route path="movie/:id" element={<MoviePage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
