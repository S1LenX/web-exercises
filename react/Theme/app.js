import React from 'react';
import { ThemeProvider } from './q1';
import ThemedBox from './q2';
import ThemeToggle from './q3';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <ThemedBox />
    </ThemeProvider>
  );
}

export default App;
