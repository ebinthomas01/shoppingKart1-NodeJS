import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="label form-label">Search Product</label>
                    <input type="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <Link to="/ViewAll" ><button className="btn btn-success">Search</button> </Link> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search