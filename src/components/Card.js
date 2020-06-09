import React from 'react'

import Layout from './Layout';
import './Card.css'

const Card = ({ title, children }) => {
  return (
    <Layout>
      <div className="card">
        <div className="title"><h2>{title}</h2></div>
        <div className="content">
          {children}
        </div>
      </div>
    </Layout>
  )
}

export default Card;