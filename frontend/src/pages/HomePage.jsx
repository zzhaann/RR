import { Link } from "react-router-dom"

function App() {
  return (
    <>
      <div className="container home-page__container">
        <h1 className="main__title">Capybara Games</h1>
          <h3 className="main__text">
           Where you can play and unwind like a capybara!
           Dive into our collection of soothing games designed to bring you the same calm and joy
             as capybara in its serene habitat. Embrace the tranquility and have fun!
          </h3>
        <div className="home__buttons">
          <Link to="/login" className="btn btn-secondary">Login</Link>
          <Link to="/register" className="btn btn-primary">Sign up</Link>
        </div>
      </div>
    </>
  )
}

export default App