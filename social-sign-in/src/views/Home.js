import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import './index.css'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      profileImage: '',
      fullName: '',
      isLogout: false
    }
    this.onLogout = this.onLogout.bind(this);
  }
  componentWillMount() {
    let fbData = JSON.parse(localStorage.getItem('fbData'));
    let googleData = JSON.parse(localStorage.getItem('googleData'));

    if (!fbData && !googleData) {
      this.setState({ isLogout: true });
    }
    if (fbData) {
      this.setState({ profileImage: fbData.picture, fullName: fbData.name });
    }else if (googleData) {
      this.setState({ profileImage: googleData.picture, fullName: googleData.name });
    }
  }
  onLogout(e) {
    //TODO Setear todas las variables de mi local storage vacias, y redireccionar a inicio
    localStorage.clear();
    this.setState({ isLogout: true });
  }
  render(){
    if (this.state.isLogout) {
      return(<Redirect to="/"/>);
    }
    return(
      <div className="Home">
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>{ this.state.fullName }</li>
              <li>
                <img className="circle Home-avatar" src={ this.state.profileImage }/>
              </li>
              <li>
                <i onClick={ this.onLogout } className="Home-logout fa fa-power-off"></i>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Home;
