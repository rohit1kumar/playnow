import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { NavBar } from "./components";
import RefreshIcon from '@mui/icons-material/Refresh';

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
      <Suspense fallback={
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
      }>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
