/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Register.css'
import routes from '../../constants/routes'
import { history } from '../../store/configureStore'

type Props = {}

export default class Register extends Component<Props> {
  constructor (props) {
    super(props)
    this.state = {
      fullname: '',
      email: '',
      empid: '',
      mobilenumber: '',
      password: '',
      confirmpassword: ''
    }

    this.register = this.register.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  register (event) {
    console.log(JSON.stringify(this.state))
    event.preventDefault()
    history.push('/otpverification', this.state)
  }

  handleChange (event) {
    const state = Object.assign({}, this.state)
    state[event.target.name] = event.target.value
    this.state = state
    console.log(this.state)
  }

  render () {
    return (
      <div className={styles.container} data-tid='container'>
        <div className={styles.header}>
          <h3>Enter the details here:</h3>
          <Link to={routes.LOGIN} className={styles.register} replace>
            <button type='button' className={styles.submit}>
              Login
            </button>
          </Link>
        </div>
        <div className='login'>
          <form onSubmit={this.register}>
            <div className={styles.formfield}>
              <label className={styles.formlabel}>Full Name</label>
              <input
                type='text'
                id='fullname'
                name='fullname'
                className={styles.forminput}
                onChange={this.handleChange}
                placeholder='Full name'
                required
              />
            </div>
            <div className={styles.formfield}>
              <label className={styles.formlabel}>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                className={styles.forminput}
                onChange={this.handleChange}
                placeholder='Email'
                required
              />
            </div>

            <div className={styles.formfield}>
              <label className={styles.formlabel}>Emp Id</label>
              <input
                type='text'
                name='empid'
                className={styles.forminput}
                onChange={this.handleChange}
                placeholder='Emp Id'
                required
              />
            </div>

            <div className={styles.formfield}>
              <label className={styles.formlabel}>Mobile Number</label>
              <input
                type='text'
                name='mobilenumber'
                className={styles.forminput}
                onChange={this.handleChange}
                placeholder='Mobile Number'
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

            <div className={styles.formfield}>
              <label className={styles.formlabel}>Confirm Password</label>
              <input
                type='password'
                name='confirmpassword'
                className={styles.forminput}
                onChange={this.handleChange}
                placeholder='Confirm Password'
                required
              />
            </div>
            <div>
              <button type='submit' className={styles.submit}>
                Save
              </button>
              <Link to={routes.LOGIN} className={styles.register} replace>
                <button type='button' className={styles.cancel}>
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
