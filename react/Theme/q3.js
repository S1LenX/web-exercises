import React, { useContext } from 'react';
import { ThemeContext } from './q1';

function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

export default ThemeToggle;
