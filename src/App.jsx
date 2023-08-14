import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import {
  Feed,
  NavBar,
  SearchFeed,
  VideoDetails,
  ChannelDetails,
} from "./components"

function App() {

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <NavBar />
      </Box>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:seachTerm" element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
