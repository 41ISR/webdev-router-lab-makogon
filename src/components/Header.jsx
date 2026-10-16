import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault()
      navigate("/search?q=" + encodeURIComponent(e.target.query.value.trim()))
    }

  return (
    <header className="header">
      <div className="header-inner">
        <Link 
          to="/" 
          className="logo"
        >
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </Link>

        <nav className="nav">
          <NavLink className={'nav-link'} to="/">Главная</NavLink>
          <NavLink className={'nav-item'} to="/">Фильмы</NavLink>
          <NavLink className={'nav-item'} to="/">О проекте</NavLink>
        </nav>

        <form className="search" onSubmit={handleSubmit}>
          <span className="search-icon">⌕</span>
          <input
            name="query"
            type="text"
            placeholder="Поиск фильмов"
          />
        </form>
      </div>
    </header>
  );
}