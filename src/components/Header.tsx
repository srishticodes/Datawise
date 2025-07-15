import React from 'react';
import './Header.css';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button onClick={toggleSidebar} className="sidebar-toggle-btn">
        &#9776;
      </button>
      <h1 className="header-title">Datawise</h1>
    </header>
  );
};

export default Header; 