import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import Loader from '../utils/Loader'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VideoDetails = () => {
    const [videoDetail, setVideoDetail] = useState(null)
    const [relatedVideos, setRelatedVideos] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]))
            .catch((err) => console.log(err))
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setRelatedVideos(data.items))
            .catch((err) => console.log(err))
    }, [id])

    if (!videoDetail?.snippet) return (<Loader />)
    const { snippet, statistics } = videoDetail
    const { title, channelId, channelTitle } = snippet
    const { viewCount, likeCount } = statistics

    return (
        <Box minHeight="95vh" backgroundColor='black' >
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
                        <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                            {title}
                        </Typography>
                        <Stack direction='row' justifyContent={'space-between'} sx={{ color: '#fff' }} py={1} px={2}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >
                                    {channelTitle}
                                    <CheckCircle sx={{
                                        fontSize: '12px',
                                        color: 'gray',
                                        ml: '5px'
                                    }} />
                                </Typography>
                            </Link>
                            <Stack direction='row' gap='20px' alignItems='center'>
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>{parseInt(viewCount).toLocaleString()} views</Typography>
                                <Typography variant='body1' sx={{ opacity: 0.7 }}>{parseInt(likeCount).toLocaleString()} likes</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent={'center'} alignItems={'center'}>
                    <Videos videos={relatedVideos} direction={'column'} />
                </Box>
            </Stack >
        </Box >
    )
}

export default VideoDetails
