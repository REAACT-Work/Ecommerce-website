import React from 'react'
import { PRODUCTS1 } from './products'

const newArrival=()=> {
  return<>
  <div className="row mt-4">
    {PRODUCTS1.slice(1,5).map(product=>(
      <div className='col-3 radi  '>
        <div key={product.id}>
          
          <div className="card p-2 m-auto h-100">
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
  </>
}

export default newArrival
