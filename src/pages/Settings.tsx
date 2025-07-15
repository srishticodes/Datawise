import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Settings.css';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <div className="card">
        <h2>Appearance</h2>
        <div className="setting-item">
          <span>Theme</span>
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === 'dark'}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings; 