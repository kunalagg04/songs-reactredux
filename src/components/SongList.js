import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  renderList = () => {
    return this.props.songs.map(song => {
      return (
        <div>
          <h2>{song.title}</h2>
          <button type="submit">Submit</button>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderList}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
};

export default connect(mapStateToProps)(SongList);
