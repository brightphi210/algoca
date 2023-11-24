
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Event from "./Pages/Event";
import CreateEvent from "./Pages/CreateEvent";
import Announcement from "./Pages/Announcement";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Event />}></Route>
          <Route path="/createEvent" element={<CreateEvent />}></Route>
          <Route path="/announcement" element={<Announcement />}></Route>
          {/* <Route path="/contact" element={<Contact />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
