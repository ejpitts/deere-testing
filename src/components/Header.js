import React from "react";

const Header = ({ title }) => <header className="Header">{title}</header>;

Header.defaultProps = {
  title: "Greetings"
};

export default Header;
