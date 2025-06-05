import './home.css'

import Header from '../../components/Header/Header'
import CardPizza from '../../components/CardPizza/CardPizza'



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
