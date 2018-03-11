import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'

class UserItem extends Component {
  constructor(){
    super();
    this.state = {
      isRedirected: false
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(e){
    //TODO
    this.setState({ isRedirected: true });
  }
  render(){
    const { name, last_name, id, facebook } = this.props;
    if (this.state.isRedirected) {
      return(<Redirect to={ "detail/" + id } />);
    }
    return(
      <div className="card" onClick={ this.onClick }>
        <div className="card-content">
          <div className="UserItem-leftBox">
            <img
              className="UserItem-image"
              src="http://info.mzalendo.com/media_root/images/469BBEA9-486C-E211-A5C8-005056870012-2013-03-01T17-10-29_1.jpg"
              alt="profile"/>
          </div>
          <div className="UserItem-rightBox">
            <h2 className="UserItem-name">{ name + " " + last_name }</h2>
            <h3 className="UserItem-facebook">{ facebook }</h3>
          </div>
        </div>
      </div>
    );
  }
}

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  facebook: PropTypes.string
}

export default UserItem;
