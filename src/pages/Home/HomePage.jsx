import './Home.css'
import React from 'react'
import Header from '../../components/header/Header'
import CardPizza from '../../components/cardpizza/CardPizza'

function HomePage() {
  return (
    <div className="home-page page">
      <Header />
    <div className="card-container pizza-card">
      <CardPizza />
    </div>
    </div>
  )
}

export default HomePage;
