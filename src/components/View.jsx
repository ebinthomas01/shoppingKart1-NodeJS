import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {
    const [data,changeData]=useState({"products":[]})
        
            const fetchData=()=>{
                axios.get("https://dummyjson.com/products").then(
                    (response)=>{
                        changeData(response.data)
                    }
                ).catch(

                    (error)=>{
                        console.log(error.message)
                        alert(error.message)
                    }

                ).finally()
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
                            data.products.map(
                                (value,index) => { 
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <div class="card h-100" >
                                    <img class="card-img-top" src={value.images} height="250px" alt="Card image cap"/>
                                    <div class="card-body">
                                      <h5 class="card-title">{value.title}</h5>
                                      <p class="card-text">Product Id :{value.id}</p>
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

export default View