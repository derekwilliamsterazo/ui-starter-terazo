
// import { CssBaseline, ThemeProvider } from "@mui/material";
import {ThemeProvider, CssBaseline} from '@material-ui/core';
import { darkTheme } from "../src/themes/theme.dark";
import { lightTheme } from "../src/themes/theme.light";

export const decorators = [
  (Story) => (  

      <ThemeProvider theme={lightTheme}>       
        <CssBaseline />
        <Story />
      </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}