import React, { Component } from "react";
import HOC from "./HOC";
import NavLink from "./NavLink";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { path: "/", text: "Home", isActive: false },
        { path: "/instructions", text: "Instructions", isActive: false },
        { path: "/blockchain", text: "Blockchain", isActive: false },
        { path: "/info", text: "Candidates", isActive: false },
        { path: "/results", text: "Results", isActive: false }
      ],
      adminLinks: [
        { path: "/", text: "Home", isActive: false },
        { path: "/instructions", text: "Instructions", isActive: false },
        { path: "/blockchain", text: "Blockchain", isActive: false },
        { path: "/info", text: "Candidates", isActive: false },
        { path: "/results", text: "Results", isActive: false },
        { path: "/admin", text: "Admin", isActive: false }
      ]
    };
  }

  handleClick(i) {
    const links = this.state.links.slice();
    for (const j in links) {
      links[j].isActive = i == j;
    }
    this.setState({ links: links });
  }

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-danger text-white"
          id="navbar"
        >
          <ul className="navbar-nav">
            {this.props.adminStatus
              ? this.state.adminLinks.map((link, i) => (
                  <NavLink
                    path={link.path}
                    text={link.text}
                    isActive={link.isActive}
                    key={link.path}
                    onClick={() => this.handleClick(i)}
                  />
                ))
              : this.state.links.map((link, i) => (
                  <NavLink
                    path={link.path}
                    text={link.text}
                    isActive={link.isActive}
                    key={link.path}
                    onClick={() => this.handleClick(i)}
                  />
                ))}
          </ul>
        </nav>
        <img src="Header.png" />
      </div>
    );
  }
}

export default HOC(Navbar);
