import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

const Loader = () => (
    <Box sx={{ position: 'absolute', zIndex: 999999 }} width="100%">
        <LinearProgress />
    </Box>
)

export default Loader
