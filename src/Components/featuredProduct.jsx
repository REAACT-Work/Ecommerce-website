import React from 'react'
import { PRODUCTS } from './products'


const featuredProduct = ()=> {
  return <>
  <div className="row mt-4">
    {PRODUCTS.slice(2,6).map(product=>(
      <div className='col-3 rad '>
        <div key={product.id}>
          
          <div className="card  p-2 m-auto h-100">
            <img src={product.image} alt='' className='card-img-top img-fluid m-auto p-3'/>
            <div className="card-details">
              <div className="tittle mb-3">
              <span>{product.brand}</span>
              <h6>{product.name}</h6>
              </div>
              <div className="card-footer text-center mb-3">
              <p className='mt-2 strike'>{product.status}</p>
             
              <p ><strike className="text-danger strike">{product.rate}</strike></p>
              </div>
            </div>
          </div>
          </div>
        </div>

    ))}
  </div>
    </>;
}

export default featuredProduct