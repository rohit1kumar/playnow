import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
import { BorderBottom, Minimize } from '@mui/icons-material'

const NavBar = () => {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            p={2}
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                justifyContent: 'space-between',
                backgroundColor: '#000',
                minHeight: "8vh",
            }}
        >
            <Link
                to="/"
                style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logo} alt="logo" height={45} />
            </Link>
            <SearchBar />
        </Stack>
    )
}

export default NavBar
