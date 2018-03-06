import React from 'react';
import { merge } from 'lodash';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  handleSubmit () {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.login(user);
  }

  render() {
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
            <label>Email
              <input type='text'
                value={this.state.email}
                onChange={this.update('email')}
                className='login-input'
              />
            </label>
            <label>Password
              <input type='password'
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input'
              />
            </label>
            <input className='session-submit'
              type='submit'
              value={this.props.formType}
            />
        </form>
      </div>
    );
  }

}

export default LoginForm;
