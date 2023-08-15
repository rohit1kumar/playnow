import { Link } from 'react-router-dom'
import { Box, Typography, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channel, marginTop }) => {

    return (
        <Box sx={
            {
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '365px', md: '320px' },
                height: '326px',
                margin: 'auto',
                marginTop
            }
        }>
            <Link to={`/channel/${channel?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: '#fff',
                    }}
                >
                    <CardMedia image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channel?.snippet?.title}
                        sx={{
                            mb: 2,
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            border: '1px solid #e3e3e3'
                        }}
                    />
                    <Typography
                        variant='h6'
                        sx={{ fontWeight: 'bold' }}
                    >
                        {channel?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                    </Typography>
                    {channel?.statistics?.subscriberCount && <Typography>
                        {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}Subscribers
                    </Typography>}
                </CardContent>
            </Link>

        </Box>
    )
}

export default ChannelCard
