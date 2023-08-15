import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {
    demoVideoUrl,
    demoChannelUrl,
    demoVideoTitle,
    demoThumbnailUrl,
    demoChannelTitle,
} from '../utils/constants'


const VideoCard = ({ video }) => {
    const { id, snippet } = video
    const { videoId } = id
    const { title, channelTitle, channelId, thumbnails } = snippet
    const { url } = thumbnails?.high

    return (
        <Card sx={{ width: { md: '320px', xs: '78%' }, boxShadow: 'none', borderRadius: 0 }} >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={url}
                    alt={title}
                    sx={{ width: 385, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }} >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight={'bold'} color='#FFF'>
                        {title?.slice(0, 60) || demoVideoTitle?.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight={'bold'} color='gray'>
                        {channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>

        </Card >
    )
}

export default VideoCard
