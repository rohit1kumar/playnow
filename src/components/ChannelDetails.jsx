import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, colors } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetails = () => {
    const [channel, setChannel] = useState(null)
    const [videos, setVideos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`channels?id=${id}&part=snippet`)
            .then(data => setChannel(data?.items[0]))
            .catch(err => console.log(err))
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then(data => setVideos(data?.items))
            .catch(err => console.log(err))
    }, [id])

    return (
        <Box minHeight={'95vh'} backgroundColor='black'  >
            <Box >
                <div style={{
                    background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                    zIndex: 10,
                    height: '300px',
                }}>
                </div>
                <ChannelCard channel={channel} marginTop={'-110px'} style={{ colors: 'black' }} />
            </Box>
            <Box display='flex' p='2'>
                <Box sx={{ mr: { sm: '100px' } }}>
                </Box>
                <Videos videos={videos} />
            </Box>
        </Box >
    )
}

export default ChannelDetails
