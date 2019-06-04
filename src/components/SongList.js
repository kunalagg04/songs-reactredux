import "./SongList.css";
import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <ul class="list-group">
          <li class="list-group-item">
            <span>{song.title}</span>
            <button>SelecT</button>
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
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
