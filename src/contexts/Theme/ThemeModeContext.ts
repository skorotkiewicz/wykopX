import { PaletteMode } from '@mui/material';
import { createContext } from 'react';

export interface ThemeModeContextInterface {
  toggleThemeMode: () => void;
  themeMode: PaletteMode;
}

const ThemeModeContext = createContext<ThemeModeContextInterface>({
  toggleThemeMode: () => {}, // eslint-disable-line
  themeMode: 'dark',
});

export default ThemeModeContext;
