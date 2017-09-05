import React from 'react'
import { Link } from 'react-router-dom'
import Tachyons from 'tachyons'

const Header = () => {
  return (
    <nav className="avenir">
      <Link to="/" className="link">
        <a
          className="link black-90 f1 f-headline tc fw3 db mb2 mb3-ns hover-black-90"
          title="Home"
        >
          Diamond Nets
        </a>
      </Link>
      <div className="tc pb1 pt2 bt bb b--green">
        <Link to="/">
          <a
            className="link black-60 hover-black-90 f6 f5-ns dib mr3"
            title="Home"
          >
            Home
          </a>
        </Link>
        <Link to="/product-lines">
          <a
            className="link black-60 hover-black-90 f6 f5-ns dib mr3"
            title="Product Lines"
          >
            Product Lines
          </a>
        </Link>
        <Link to="/facility">
          <a
            className="link black-60 hover-black-90 f6 f5-ns dib mr3"
            title="Facility"
          >
            Facility
          </a>
        </Link>
        <Link to="/company-info">
          <a
            className="link black-60 hover-black-90 f6 f5-ns dib"
            title="Company Info"
          >
            Company Info
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Header
