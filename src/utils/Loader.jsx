import RefreshIcon from '@mui/icons-material/Refresh';
import { Box } from '@mui/material'

const Loader = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh" // Center content vertically
        >
            <RefreshIcon
                style={{
                    fontSize: 100, // Make the icon big
                    animation: "spin 1s infinite"
                }}
            />
        </Box>
    )
}

export default Loader
