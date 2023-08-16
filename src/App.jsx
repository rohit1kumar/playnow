import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import { NavBar } from "./components"

const Feed = lazy(() => import("./components/Feed"));
const VideoDetails = lazy(() => import("./components/VideoDetails"));
const ChannelDetails = lazy(() => import("./components/ChannelDetails"));
const SearchFeed = lazy(() => import("./components/SearchFeed"));

function App() {

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: 'primary.main' }}>
        <NavBar />
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
