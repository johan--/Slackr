import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import NavLinks from '../nav_component'

export class SignupForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      avatarUrl: '',
      errors: this.props.errors
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    this.setState({
      email: '',
      password: '',
      errors: []
    })
  }

  update (field) {
    return (e) => {
      this.setState(
        {[field]: e.target.value}
      )
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
  }

  render () {
    let errors = this.props.errors.map((error) => <li>{error}</li>)
    return (
      <div className='signup-form-div'>
        <NavLinks/>
        <div className='errors-box'>
          <ul id='error-messages'>
            {errors}
          </ul>
        </div>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div className='signup-form-container'>
            <h3 className='form-title-signup'>Welcome to Slack!</h3>
            <ul className='signup-form-list'>
              <li>
                <label className='email-input'>Email
                  <input id='email-input' type='text' placeholder='OliverBall@coolpeeps.com'
                    value={this.state.email} onChange={this.update('email')} />
                </label>
              </li>
              <li>
                <label className='username-input'>Username
                  <input type='text' id='username-input' placeholder='OliverBall'
                    value={this.state.username} onChange={this.update('username')}/>
                </label>
              </li>
              <li>
                <label className='password-input'>Password
                  <input type='password' id='password-input' placeholder='6 characters minimum'
                    value={this.state.password} onChange={this.update('password')}/>
                </label>
              </li>
              <li>
                <label className='avatar-link-input'>Avatar Link
                  <input id='avatar-link-input' type='text'
                    placeholder='https://oliverball.com/smiley+face'
                    value={this.state.avatarUrl} onChange={this.update('avatarUrl')}/>
                </label>
              </li>
              <li id= 'submit-li'>
                <input id='submit-input' type='Submit' value={this.props.formType}/>
              </li>
              <li id='transfer-to-login'>
                <p id='or-text'>or</p>
                <Link id='sign-in-link' to='/login'>Login as guest</Link>
              </li>
            </ul>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SignupForm)
