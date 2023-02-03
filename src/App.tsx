import { ThemeProvider } from '@mui/material'
import Router from 'routes'
import theme from './theme'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    )
}

export default App
