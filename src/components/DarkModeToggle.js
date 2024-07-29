import React from 'react';
import { useTheme } from './context/ThemeContext';
import './styles/DarkModeToggle.css'; 

const DarkModeToggle = () => {
  const { theme, toggleColorMode } = useTheme();

  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" onChange={toggleColorMode} checked={theme === 'dark'} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;