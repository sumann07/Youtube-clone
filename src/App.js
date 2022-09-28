import React from "react";
import {Box} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChannelDetail from "./component/ChannelDetail";
import Feed from "./component/Feed";
import Navbar from "./component/Navbar";
import SearchFeed from "./component/SearchFeed";
import VideoFeed from "./component/VideoFeed";
import "./app.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoFeed />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;
