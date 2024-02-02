import React from 'react'
import blog1 from "../assets/images/blog/blog-1.jpg"
import blog2 from "../assets/images/blog/blog-2.jpg"
import blog3 from "../assets/images/blog/blog-3.jpg"
import blog4 from "../assets/images/blog/blog-4.jpg"

const Blogs = () => {
  return (
    <div>
      <div className="col d-flex m-auto">
        <div className="card mx-2">
            <img src={blog1} alt='' className='card-img img-fluid mb-3 p-5'/>
            <div className="card-body">
                <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, amet.laboriosam, veritatis tenetur quaerat nisi est .</p>
                <button className='button-blog'>
                    Learn More
                </button>
            </div>
        </div>
        <div className="card mx-2">
            <img src={blog2} alt='' className='card-img img-fluid mb-3 p-5'/>
            <div className="card-body">
                <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, amet.laboriosam, veritatis tenetur quaerat nisi est .</p>
                <button className='button-blog'>
                    Learn More
                </button>
            </div>
        </div>
        <div className="card mx-2">
            <img src={blog3} alt='' className='card-img img-fluid mb-3 p-5'/>
            <div className="card-body">
                <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, amet.laboriosam, veritatis tenetur quaerat nisi est .</p>
                <button className='button-blog'>
                    Learn More
                </button>
            </div>
        </div>
        <div className="card mx-2">
            <img src={blog4} alt='' className='card-img img-fluid mb-3 p-5'/>
            <div className="card-body">
                <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, amet.laboriosam, veritatis tenetur quaerat nisi est .</p>
                <button className='button-blog'>
                    Learn More
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
