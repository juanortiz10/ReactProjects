import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

class UserDetailCover extends Component {
  constructor(){
    super();
    this.state = {
      cover: 'https://vignette3.wikia.nocookie.net/tumblr-survivor-athena/images/7/7a/Blank_Avatar.png/revision/latest?cb=20161204161729'
    }
  }
  render(){
    const { firstName, lastName } = this.props;
    return(
      <div className="UserDetailCover">
        <img
          src={ this.state.cover }
          className="UserDetailCover-img"
          alt="avatar"/>
        <div>
          <h2 className="UserDetailCover-name">{ firstName + " " + lastName }</h2>
        </div>
      </div>
    );
  }
}

UserDetailCover.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
}

export default UserDetailCover;
