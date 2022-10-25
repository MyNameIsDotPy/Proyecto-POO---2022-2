import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Spiffy Equatorial Gull</title>
        <meta property="og:title" content="Page - Spiffy Equatorial Gull" />
      </Helmet>
    </div>
  )
}

export default Page
