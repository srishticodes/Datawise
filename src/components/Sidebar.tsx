import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { logout, currentUser } = useAuth();

  return (
    <div className="sidebar">
      <div>
        <h2>Datawise</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar-footer">
        {currentUser && <span className="user-name">{currentUser.name}</span>}
        <button onClick={logout} className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar; 