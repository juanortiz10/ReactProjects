import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { playTrack, checkSignIn } from '../../actions'

import './index.css'

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songId: this.props.match.params.songId
    }
  }
  componentWillMount(){
    this.props.checkSignIn();
    this.props.playTrack(this.state.songId);
  }
  render() {
    const { player } = this.props;

    if (player.type === "COMPLETE_SONG") {
      console.log(player.payload);
      return(
        <div className="Player">
          <div className="card">
            <div className="card-content Player-box">
              <div className="Player-left">
                <img src={ player.payload.album.images[0].url}/>
              </div>
              <div className="Player-right">
                <audio controls>
                  <source src={ player.payload.preview_url }/>
                </audio>
                <h4>{ player.payload.name }</h4>
                <h6>{ player.payload.artists[0].name}</h6>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div></div>;
  }
}

function mapStateToProps(state) {
  return {
    routes: state.routes,
    player: state.player
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    checkSignIn,
    playTrack
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
