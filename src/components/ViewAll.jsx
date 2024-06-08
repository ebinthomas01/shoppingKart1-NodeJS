import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changeData] = useState([])
            const fetchData=()=>{
              axios.get("https://fakestoreapi.com/products").then(
                (response)=>{
                  console.log(response.data)
                  changeData(response.data)
                }
              ).catch().finally()
          }
        
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                            {
                            data.map(
                                (value,index) => 
                                {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card h-100" >
                                    <img class="card-img-top" src={value.image} height="250px" alt="Card image cap"/>
                                    <div class="card-body">
                                      <h5 class="card-title">{value.title}</h5>
                                      <p class="card-text">Product Id :{value.id}</p>
                                      <p class="card-text">Rating : {value.rating.rate}/{value.rating.count}</p>
                                      <p class="card-text">${value.price}</p>
                                      <a href="#" class="btn btn-primary">Buy Now</a>
                                    </div>
                                  </div>
                                  </div>
                                }
                            )
                        }
                            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll