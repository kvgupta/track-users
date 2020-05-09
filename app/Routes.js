import React from 'react'
import { Switch, Route } from 'react-router'
import routes from './constants/routes'
import App from './containers/App'
import HomePage from './containers/HomePage'
import CounterPage from './containers/CounterPage'
import LoginPage from './containers/LoginPage'
import RegisterPage from './containers/RegisterPage'
import OtpPage from './containers/OtpPage'
import UploadFilePage from './containers/UploadFilePage'
import ReportsPage from './containers/ReportsPage'
import OtpVerificationPage from './containers/OtpVerificationPage'

export default () => (
  <App>
    <Switch>
      <Route path={routes.LOGIN} component={LoginPage} />
      <Route path={routes.REGISTER} component={RegisterPage} />
      <Route path={routes.OTPVERIFICATION} component={OtpVerificationPage} />
      <Route path={routes.OTP} component={OtpPage} />
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={HomePage} />
      <Route path={routes.UPLOAD} component={UploadFilePage} />
      <Route path={routes.REPORTS} component={ReportsPage} />
      <Route path='/' component={LoginPage} />
    </Switch>
  </App>
)
