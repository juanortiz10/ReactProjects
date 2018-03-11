import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

import UserPost from './UserPost'

class UserDetailBody extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: this.props.messages
    }
  }
  render(){
    let messages = this.state.messages.map((currentValue) => {
      return(<UserPost
              key={ currentValue.id }
              id={ currentValue.id}
              title={ currentValue.title }
              message={ currentValue.message }/>);
    });
    return(
      <div className="UserDetailBody">
        <div>
          { messages }
        </div>
      </div>
    )
  }
}

UserDetailBody.propTypes = {
  messages: PropTypes.array.isRequired
}

export default UserDetailBody;
