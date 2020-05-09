/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.css';
import routes from '../../constants/routes';
import { history } from '../../store/configureStore';

type Props = {};

export default class Login extends Component<Props> {
  constructor (props) {
    super(props)
    this.state = { username: '', password: '' }

    this.login = this.login.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  login (event) {
    console.log(JSON.stringify(this.state));
    event.preventDefault();
    history.push('/upload', this.state);
  }

  handleChange (event) {
    const state = Object.assign({}, this.state);
    state[event.target.name] = event.target.value;
    this.state = state;
    console.log(this.state);
  }

  render () {
    return (
      <div className={styles.background}>
        <Link to={routes.REGISTER} className={styles.register} replace>
          <button type='button' className={styles.submit}>
            Register
          </button>
        </Link>
        <div className={styles.container} data-tid='container'>
          <form onSubmit={this.login}>
            <div className={styles.formfield}>
              <label className={styles.formlabel}>Username</label>
              <input
                type='text'
                id='username'
                name='username'
                className={styles.forminput}
                onChange={this.handleChange}
                placeholder='User name'
                required
              />
            </div>
            <div className={styles.formfield}>
              <label className={styles.formlabel}>Password</label>
              <input
                type='password'
                name='password'
                className={styles.forminput}
                onChange={this.handleChange}
                placeholder='Password'
                required
              />
            </div>
            <div className={styles.action}>
              <button type='submit' className={styles.submit}>
                Login
              </button>
              <Link to={routes.FORGOT} className={styles.forgotpassword}>
                Forgot Password ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
