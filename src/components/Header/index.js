import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="header-container">
        <Link to="/">
          <p> Home</p>
        </Link>
        <Link to="/about">
          <p> About</p>
        </Link>
      </nav>
    )
  }
}
export default Header
