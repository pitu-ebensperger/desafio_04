
import React from 'react'
import Header from '../header/Header'
import CardPizza from '../cardpizza/CardPizza'

function Home() {
  return (
    <div className="home-page">
      <Header />
    <div className="card-container">
      <CardPizza />
    </div>
    </div>
  )
}

export default Home;
