import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import './index.css';

class SongItem extends Component {
  render() {
    const { songName, tokenPath, albumPhoto, artistName, songId } = this.props;
    return(
      <div className="SongItem">
        <Link to={"player/" + songId + tokenPath}>
          <div className="SongItem-photo">
            <img src={albumPhoto}/>
          </div>
          <div className="SongItem-info">
            <h2>{ songName }</h2>
            <h3>{ artistName}</h3>
          </div>
        </Link>
      </div>
    );
  }
}

SongItem.propTypes = {
  songId: PropTypes.string,
  tokenPath: PropTypes.string,
  albumPhoto: PropTypes.string,
  songName: PropTypes.string,
  artistName: PropTypes.string
}

export default SongItem;
