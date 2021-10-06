import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import game from "../../src/assets/images/discord.png"
import twitter  from "../../src/assets/images/twitter.png"
import opensea from "../../src/assets/images/opensea.png"

const links = [
  { href: '#About', text: 'About' },
  { href: '#Featured', text: 'Featured' },
  { href: '#Roadmap', text: 'Roadmap' },
  { href: '#Team', text: 'Team' },
  { href: '#ConnectWallet', text: 'Connect Wallet' },
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}>{text}</NavLink>
  </NavItem>
);

 class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div className="header-wrapper">
        <Navbar light expand="sm">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
          <div className="social-media-icons">
              <Link to=""><img src={game} alt="icon-game"/></Link>
              <Link to=""><img src={twitter} alt="icon-twitter"/></Link>
              <Link to=""><img src={opensea} alt="icon-opensea"/></Link>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header