import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/index';
import Player from 'pages/player';

function App() {
	return (
		<BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/player" element={<Player />} />
            </Routes>
        </BrowserRouter>
	);
}

export default App;
