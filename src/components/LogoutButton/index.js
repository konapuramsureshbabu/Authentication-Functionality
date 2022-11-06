import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LogoutButton extends Component {
  render() {
    const onClickLogout = () => {
      const {history} = this.props
      Cookies.remove('jwt_token')
      history.replace('/login')
    }
    return (
      <div className="button-container">
        <button type="button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    )
  }
}
export default withRouter(LogoutButton)
