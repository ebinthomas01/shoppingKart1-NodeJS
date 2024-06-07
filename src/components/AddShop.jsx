import React from 'react'
import NavBar from './NavBar'

const AddShop = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-4">
                        <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Title</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Price</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Category</label>
                        <select name="" id="" className="form-control">
                            <option className="option">Shirt</option>
                            <option className="option">Jeans</option>
                            <option className="option">Tshirt</option>
                            <option className="option">Shorts</option>
                            <option className="option">Breifs</option>
                            <option className="option">Shoes</option>
                        </select>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="label form-label">Description</label>
                        <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Image</label>
                        <input type="file" name="" id="" className="form-control" />
                        </div>
                        <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Rating</label>
                        <input type="text" className="form-control"/>
                        </div>
                        <div className="col col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Count</label>
                        <input type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Add Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default AddShop