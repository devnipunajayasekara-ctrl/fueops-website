import Link from 'next/link';

export default function Contact() {
    return (
        <>
            {/* Page Title */}
            <section className="page-title">
                <div className="page-title-icon" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-1.png)' }}></div>
                <div className="page-title-icon-two" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-2.png)' }}></div>
                <div className="page-title-shadow" style={{ backgroundImage: 'url(/assets/images/background/page-title-1.png)' }}></div>
                <div className="page-title-shadow_two" style={{ backgroundImage: 'url(/assets/images/background/page-title-2.png)' }}></div>
                <div className="auto-container">
                    <h2>Contact Us</h2>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </section>
            {/* End Page Title */}

            {/* Contact Info */}
            <section className="contact-info">
                <div className="auto-container">
                    <div className="row clearfix">

                        {/* Info Block One */}
                        <div className="info-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="info-block_one-inner">
                                <div className="info-block_one-icon">
                                    <i className="icon-phone"></i>
                                </div>
                                <h4>Call us on</h4>
                                <a href="tel:+415-864-8728">+415-864-8728</a> <br />
                                <a href="tel:+415-864-8729">+415-864-8729</a>
                            </div>
                        </div>

                        {/* Info Block One */}
                        <div className="info-block_one active col-lg-4 col-md-6 col-sm-12">
                            <div className="info-block_one-inner">
                                <div className="info-block_one-icon">
                                    <i className="icon-envelope"></i>
                                </div>
                                <h4>Email us</h4>
                                <a href="mailto:support@braine.com">support@braine.com</a> <br />
                                <a href="mailto:contact@braine.com">contact@braine.com</a>
                            </div>
                        </div>

                        {/* Info Block One */}
                        <div className="info-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="info-block_one-inner">
                                <div className="info-block_one-icon">
                                    <i className="icon-map"></i>
                                </div>
                                <h4>Our location</h4>
                                <div className="text">1426 Center StreetBend, OR <br /> 97702, California, USA</div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* End Faq One */}

            {/* Team Detail Form */}
            <section className="team-detail_form">
                <div className="auto-container">
                    <div className="row clearfix">
                        {/* Column */}
                        <div className="column col-lg-6 col-md-12 col-sm-12">
                            {/* Sec Title */}
                            <div className="sec-title style-four">
                                <div className="sec-title_title">Contact us</div>
                                <h2 className="sec-title_heading">Let's discuss your <span className="animate-text-gradient">AI transformation</span></h2>
                                <div className="sec-title_text">Whether you need an intelligent chatbot, e-commerce automation, or
                                    custom AI solutions, our team is ready to help you succeed. </div>
                            </div>
                            {/* Social Box */}
                            <div className="contact-social_box">
                                <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                                <a href="https://youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                                <a href="https://instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                        {/* Column */}
                        <div className="column col-lg-6 col-md-12 col-sm-12">
                            <div className="default-form contact-form">
                                <form method="post" action="#" id="contact-form">
                                    <div className="row clearfix">
                                        {/*Form Group*/}
                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <input type="text" name="name" placeholder="Name" required />
                                        </div>
                                        {/*Form Group*/}
                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <input type="email" name="email" placeholder="Email" required />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <input type="text" name="phone" placeholder="Phone" required />
                                        </div>
                                        {/*Form Group*/}
                                        <div className="form-group col-lg-6 col-md-6 col-sm-6">
                                            <select name="country" className="custom-select-box">
                                                <option>Select service</option>
                                                <option>Service 01</option>
                                                <option>Service 02</option>
                                                <option>Service 03</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                            <textarea className="" name="message" placeholder="Type comment here*"></textarea>
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <button type="button" className="template-btn btn-style-one">
                                                <span className="btn-wrap">
                                                    <span className="text-one">Send now</span>
                                                    <span className="text-two">Send now</span>
                                                </span>
                                            </button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Team Detail Form */}

            {/* Map One */}
            <section className="map-one">
                <div className="auto-container">
                    <div className="map-one_map">
                        <iframe width="820" height="560" id="gmap_canvas" src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=18&ie=UTF8&iwloc=&output=embed"></iframe>
                    </div>
                </div>
            </section>
            {/* End Map One */}
        </>
    );
}
