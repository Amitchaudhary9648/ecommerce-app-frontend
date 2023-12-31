import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative ">
                                <img 
                                    src="images/main-banner-1.jpg" 
                                    className='img-fluid rounded-3'
                                    alt="main banner" />
                                    <div className="main-banner-content position-absolute">
                                        <h4>SUPERCHARGED FOR PROPS.</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $999.00 or $41.62/mo.</p>
                                        <Link className='button'>Buy Now</Link>
                                    </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center ">
                                <div className="small-banner position-relative ">
                                <img 
                                    src="images/catbanner-01.jpg" 
                                    className='img-fluid rounded-3'
                                    alt="small banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>BEST SALE</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $999.00 <br/> or $41.62/mo.</p>
                                    </div>
                                </div>

                                <div className="small-banner position-relative ">
                                <img 
                                    src="images/catbanner-03.jpg" 
                                    className='img-fluid rounded-3'
                                    alt="small banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>New Arrival</h4>
                                        <h5>Buy iPad Air</h5>
                                        <p>From $999.00 <br /> or $41.62/mo.</p>
                                    </div>
                                </div>

                                <div className="small-banner position-relative ">
                                <img 
                                    src="images/catbanner-04.jpg" 
                                    className='img-fluid rounded-3'
                                    alt="small banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>New Arrival</h4>
                                        <h5>Buy iPad Air</h5>
                                        <p>From $999.00 <br /> or $41.62/mo.</p>
                                    </div>
                                </div>

                                <div className="small-banner position-relative ">
                                <img 
                                    src="images/catbanner-02.jpg" 
                                    className='img-fluid rounded-3'
                                    alt="small banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>New Arrival</h4>
                                        <h5>Buy IPad Air</h5>
                                        <p>From $999.00 <br /> or $41.62/mo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="service d-flex align-items-center justify-content-between">
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="images/service.png" alt="services" />
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p className='mb-0'>From all order over $5</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="images/service-02.png" alt="services" />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p className='mb-0'>Save upto 25% off</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="images/service-03.png" alt="services" />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className='mb-0'>With an expert</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="images/service-04.png" alt="services" />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className='mb-0'>Get Factory Default</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <img src="images/service-05.png" alt="" />
                                    <div>
                                        <h6>Secure Payment</h6>
                                        <p className='mb-0'>100% Protected Payment</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Computers & Laptops</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/laptop.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Camera& Videos</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/speaker.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Computers & Laptops</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/laptop.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Camera& Videos</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" alt="camera" />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/speaker.jpg" alt="camera" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home