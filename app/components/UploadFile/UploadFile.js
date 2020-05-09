/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './UploadFile.css'
import routes from '../../constants/routes'

type Props = {}

export default class UploadFile extends Component<Props> {
  constructor (props) {
    super(props)
    this.state = {}
    this.browseFile = this.browseFile.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  browseFile () {
    document.getElementById('uploadFile').click()
    console.log('Browse', this)
  }

  uploadFile (event) {
    console.log(event, this)
  }

  logOut () {
    console.log('Logout', this)
  }

  render () {
    return (
      <div className={styles.container} data-tid='container'>
        <div className={styles.header}>
          <button type='button' onClick={this.logOut} className={styles.submit}>
            Logout
          </button>
        </div>
        <div className={styles.formfield}>
          <label className={styles.formlabel}>Select the File:</label>
          <label className={styles.forminput} htmlFor='uploadFile'>
            Click here to Upload File
          </label>
          <input
            type='file'
            id='uploadFile'
            name='uploadFile'
            placeholder='Upload File'
            required
            className={styles.hide}
          />
          <button type='button' className={styles.browsebutton}>
            Browse
          </button>
        </div>

        <Link to={routes.REPORTS} className={styles.register} replace>
          <button type='button' className={styles.submit}>
            Reports
          </button>
        </Link>
      </div>
    )
  }
}
