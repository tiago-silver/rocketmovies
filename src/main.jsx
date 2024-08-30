import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Home} from './pages/Home'
import theme from './styles/theme';
import GlobalStyles from './styles/global';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />

    </ThemeProvider>
  </StrictMode>,
)
