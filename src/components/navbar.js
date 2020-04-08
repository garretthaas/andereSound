import React from 'react';
import Link from 'gatsby-link';
import logo from '../images/logo.svg';

class Navbar extends React.Component {
  
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {
    const menuActive = this.state.showMenu ? 'is-active' : '';
    const menuBtnActive = this.state.showMenu ? 'is-active' : '';
      return (    
    <div className="navbar" data-state={`${menuBtnActive}`}>
    <div className="navbar-brand">
        <Link className="navbar-item" to="/">
        <img src={logo} style={{ width: '88px' }} itemprop="image" alt="" />
        </Link>
    </div>
    <div className="navbar-btn" data-state={`${menuBtnActive}`} onClick={this.toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
    <nav className="navbar-nav" data-state={`${menuBtnActive}`}>
        <ul>
            <li><Link className="navbar-link" to="/" onClick={this.toggleMenu}>
            Andere Sound
            </Link></li>
            <li><Link className="navbar-link" to="/audio-tools" onClick={this.toggleMenu}>
            Audio Tools
            </Link></li>
            <li><Link className="navbar-link" to="/info" onClick={this.toggleMenu}>
            Info
            </Link></li>
            <li><Link className="navbar-link" to="/contact" onClick={this.toggleMenu}>
            Contact
            </Link></li>
        </ul>
    </nav>
    </div>)
  }
};

export default Navbar;