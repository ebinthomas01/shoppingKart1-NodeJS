import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <a class="navbar-brand" href="#"> Big Basket</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active" to="/">Home</Link>
      <Link class="nav-item nav-link" to="/Search">Search</Link>
      <Link class="nav-item nav-link" to="/Delete">Delete</Link>
      <Link class="nav-item nav-link" to="/ViewAll">View All</Link>
      <Link class="nav-item nav-link" to="/View">View New</Link>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar