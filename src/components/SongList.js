import "./SongList.css";
import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <ul class="list-group">
          <li class="list-group-item">
            <span>{song.title}</span>
            <button
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              SelecT
            </button>
          </li>
        </ul>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong: selectSong }
)(SongList);
