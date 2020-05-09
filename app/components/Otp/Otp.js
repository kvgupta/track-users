/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Otp.css'
import routes from '../../constants/routes'

type Props = {}

export default class Otp extends Component<Props> {
  constructor (props) {
    super(props)
    this.state = { opt: '' }

    this.submitOtp = this.submitOtp.bind(this)
    this.resendOtp = this.resendOtp.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  submitOtp (event) {
    console.log(JSON.stringify(this.state))
    event.preventDefault()
  }

  resendOtp (event) {
    console.log(JSON.stringify(this.state))
    event.preventDefault()
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
        <Link to={routes.REGISTER} className={styles.register} replace>
          <button type='button' className={styles.submit}>
            Register
          </button>
        </Link>
        <div className={styles.otpcontainer}>
          <h3>OTP Verification</h3>
          <div>
            <h5 className={styles.resend}>
              Looks like you have not received OTP.If not received yet
              <br />
              please click 'Resend OTP' Button below.
              <br />
            </h5>
            <button className={styles.submit} onClick={this.resendOtp}>
              Resend OTP
            </button>
          </div>
        </div>
        <div>
          <form onSubmit={this.submitOtp}>
            <div className={styles.formfield}>
              <label className={styles.formlabel}>Please Enter the OTP</label>
              <input
                type='password'
                name='password'
                className={styles.forminput}
                onChange={this.handleChange}
                placeholder='Enter Otp'
                required
              />
            </div>
            <div className={styles.action}>
              <button type='submit' className={styles.submit}>
                Submit
              </button>
            </div>
          </form>
          <Link to={routes.LOGIN} className={styles.cancel}>
            <button className={styles.submit}>
              Cancel
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
