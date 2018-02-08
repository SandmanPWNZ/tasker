import React from 'react'
import { Link, browserHistory } from 'react-router'
import Header from '../components/Header'

export default function App({ children }) {
  return (
    <div>
      <Header />
      <div className={'container'} style={{margin: '50px auto'}}>
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  )
}
