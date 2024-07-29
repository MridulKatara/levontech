// src/components/context/ThemeContext.js
import React, { createContext, useContext, useState, useMemo } from 'react';

export const ColorModeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setTheme((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={{ theme, ...colorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useTheme = () => useContext(ColorModeContext);

export default ThemeContextProvider;
