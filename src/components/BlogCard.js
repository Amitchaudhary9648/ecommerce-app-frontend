import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className='img-fluid' alt="blog" />
            </div>
            <div className="blog-content">
                <p className="date">01 September, 2023</p>
                <h5 className="title">A beautiful sunday morning renaissance</h5>
                <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus dolores labore alias debitis aspernatur, obcaecati velit maxime perferendis at error ratione cum, nihil laborum voluptates, est fuga explicabo molestias doloremque.</p>
                <Link to='' className="button">Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
