
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { darkTheme } from "../src/themes/theme.dark";
// import { muiTheme } from 'storybook-addon-material-ui'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// export const withMuiTheme = (Story) => (
//   <ThemeProvider theme={darkTheme}>
//     <CssBaseline />
//     <Story />
//   </ThemeProvider>
// );

// export const decorators = [withMuiTheme];

// export const decorators = [
// 	muiTheme([darkTheme])
// ];
