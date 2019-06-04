import React from "react";
import { connect } from "react-redux";

const SongDetails = props => {
  if (!props.selectedSong) {
    return <div> Select a fuckin song !</div>;
  }
  return (
    <div>
      <div>{props.selectedSong.title}</div>
      <div>{props.selectedSong.duration}</div>
    </div>
  );
};

const mapStatetoConnect = state => {
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStatetoConnect)(SongDetails);
