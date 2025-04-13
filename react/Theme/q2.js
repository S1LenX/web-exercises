import React, { useContext } from 'react';
import { ThemeContext } from './q1';

function ThemedBox() {
  const { theme } = useContext(ThemeContext);
  const style = {
    backgroundColor: theme === 'dark' ? '#333' : '#eee',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '20px',
    margin: '10px',
  };

  return (
    <div style={style}>
      <p>This box follows the {theme} theme</p>
    </div>
  );
}

export default ThemedBox;
