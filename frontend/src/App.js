import React from 'react'

/* Routes */
import { BrowserRouter as Router, Route } from 'react-router-dom'

/* Styles */
import { Container } from 'react-bootstrap'

/* Components */
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
