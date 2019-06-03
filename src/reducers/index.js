import { combineReducers } from "redux";

const SongReducer = () => {
  return [
    { title: "kaho na kaho", duration: "2:00" },
    { title: "noha", duration: "3:00" }
  ];
};

const SelectedSongReducer = (SelectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return SelectedSong;
};

export default combineReducers({
  songs: SongReducer,
  selectedSong: SelectedSongReducer
});
