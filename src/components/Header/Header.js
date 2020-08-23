import React from 'react';

//style
import './Header.scss'

const Header = () => {

  const headerData = [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие птицы',
    'Хищные птицы',
    'Морские птицы'
  ]

  const headerItems = headerData.map((item, index) => {
    return (
      <li className="navigation__item" key={index}>
        {item}
      </li>
    )
  });

  return (
    <header className="">
      <div className="top-header">
        <h1>SongBird</h1>
        <p>Score: 0</p>
      </div>
      <ul className="navigation">
        {headerItems}
      </ul>
    </header>
  )
}

export default Header;
