import './home.css'
import {useContext } from 'react';
import Header from '../../components/header/Header'
import CardPizza from '../../components/cardpizza/CardPizza'



function Home() {

  return (
    <div className="home-page">
      <Header />
    <div className="card-container pizza-card">
      <CardPizza />
    </div>
    </div>
  )
}

export default Home;
