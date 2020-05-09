/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './OtpVerification.css'
import routes from '../../constants/routes'

type Props = {}

export default class OtpVerification extends Component<Props> {
  constructor (props) {
    super(props)
    this.state = { opt: '' }
    console.log('props', this.props)
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
        <Link to={routes.LOGIN} className={styles.login} replace>
          <button type='button' className={styles.submit}>
            Login
          </button>
        </Link>
        <div className={styles.otpcontainer}>
          <h3 className={styles.verifyotp}>OTP Verification</h3>
          <div className='login'>
            <div className={styles.formfield}>
              <label className={styles.formlabel}>Full Name</label>
              <h4 className={styles.forminput}>Text XYZ</h4>
            </div>
            <div className={styles.formfield}>
              <label className={styles.formlabel}>Email</label>
              <h4 className={styles.forminput}>test@dlaskdls.com</h4>
            </div>
            <div className={styles.formfield}>
              <label className={styles.formlabel}>Emp Id</label>
              <h4 className={styles.forminput}>77676</h4>
            </div>
            <div className={styles.formfield}>
              <label className={styles.formlabel}>Mobile No.</label>
              <h4 className={styles.forminput}>7767679279</h4>
            </div>
          </div>
          <div className={styles.resend}>
            <h6>
              Looks like you have not received OTP.If not received yet
              <br />
              please click 'Resend OTP' Button below.
              <br />
            </h6>
            <button className={styles.submit} onClick={this.resendOtp}>
              Resend OTP
            </button>
          </div>

          <div className={styles.otpForm}>
            <form onSubmit={this.submitOtp}>
              <div>
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
          </div>
        </div>
        <Link to={routes.LOGIN} className={styles.cancel}>
          <button className={styles.submit}>Cancel</button>
        </Link>
      </div>
    )
  }
}
