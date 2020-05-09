/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Reports.css'
import routes from '../../constants/routes'

type Props = {};

export default class UploadFile extends Component<Props> {
  constructor (props) {
    super(props)
    this.state = {}
    this.logOut = this.logOut.bind(this)
  }

  logOut () {

    console.log('Logout', this);
  }

  render () {
    return (
      <div className={styles.container} data-tid='container'>
        <div className={styles.header}>
          <h3>Reports</h3>
          <div>
            <Link to={routes.UPLOAD} replace>
              <button type='button' className={styles.btn}>
                Dashboard
              </button>
            </Link>
            <button type='button' onClick={this.logOut} className={styles.btn}>
              Logout
            </button>
          </div>
        </div>
        <div className={styles.reports}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>EMP ID</th>
                <th>Name</th>
                <th>Credit Amount</th>
                <th>Debit Amount</th>
                <th>Difference</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
