import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { New } from './pages/New';
import theme from './styles/theme';
import GlobalStyles from './styles/global';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Details/>
      <Home /> */}

      <New/>
    </ThemeProvider>
  </StrictMode>,
)
