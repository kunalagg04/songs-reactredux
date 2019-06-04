import "./App.css";
import React from "react";
import SongList from "./SongList";
import SongDetails from "./SongDetails";

const App = () => {
  return (
    <div class="row">
      <div class="container">
        <div class="col-lg-6">
          <SongList />
        </div>
        <div class="col-lg-6">
          <SongDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
