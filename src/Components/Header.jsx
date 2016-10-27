import React from 'react';
import { Link } from 'react-router';

const Header = () =>
  (<div className="header">
    <div className="header__button-wrapper">
      <Link
        className="header__button-wrapper__button
        header__button-wrapper__button--brand"
        to="/"
      >
        &nbsp;
      </Link>
      <Link
        className="header__button-wrapper__button"
        to="authors"
      >
        Stories
      </Link>
      <Link
        className="header__button-wrapper__button"
        to="stories"
      >
        Authors
      </Link>
      <Link
        className="header__button-wrapper__button"
        to="newTale"
      >
        Write a New Story
      </Link>
    </div>
  </div>);

Header.propTypes = {
};

export default Header;
