import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import NavLinks from '../nav_component'

export class LoginForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: this.props.errors
    }
    this.handleSubmit = this.handleSubmit.bind(this)
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
    let errors = this.state.errors.map((error) => <p>{error}</p>)

    return (
      <div>
        <NavLinks/>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <div className='login-form-container'>
            <ul className='login-form-list'>
              <li>
                <label className='email-input'>Email
                  <input id='email-input' type='email' placeholder='OliverBall@coolpeeps.com'
                    value={this.state.email} onChange={this.update('email')} />
                  {errors}
                </label>
              </li>
              <li>
                <label className='password-input'>Password
                  <input type='password' id='password-input' placeholder='6 characters minimum'
                    value={this.state.password} onChange={this.update('password')}/>
                  {errors}
                </label>
              </li>
              <li>
                <input id='submit-input' type='Submit' value={this.props.formType}/>
              </li>
            </ul>
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)
