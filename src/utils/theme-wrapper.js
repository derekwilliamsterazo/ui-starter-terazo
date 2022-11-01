import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';


export const themeWrapper = (story, thisTheme) => {
    (story) => (      
        <ThemeProvider theme={thisTheme}>       
         <CssBaseline />
         <Story />
       </ThemeProvider>
      )
}

