import { Button } from 'antd';
import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a context
const ThemeContext = createContext();

// Step 2: Create a ContextProvider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 3: Create a component that consumes the context
function ThemedButton({ children }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Button
        type='primary'
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === 'light' ? 'white' : 'black',
          color: theme === 'light' ? 'black' : 'white',
        }}
      >
        Toggle Theme
      </Button>
      {children}
    </>
  );
}

// Step 3: Create a component that consumes the context
function ThirdComponent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>This is third Component</h1>
      {theme}
    </div>
  );
}

// Step 4: Create the main App component
function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemedButton >
          <ThirdComponent />
        </ThemedButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
