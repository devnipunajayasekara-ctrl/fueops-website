import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="main-footer style-two">
            <div className="footer_pattern" style={{ backgroundImage: 'url(/assets/images/background/footer-pattern.png)' }}></div>

            <div className="footer-upper-box">
                <div className="auto-container">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                        <div className="footer-logo"><Link href="/"><img src="/assets/images/logo.svg" alt="FueOps" title="FueOps" /></Link></div>
                        <div className="footer-social_box">
                            <span>Follow us:</span>
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="auto-container">
                <div className="inner-container">
                    <div className="widgets-section">
                        <div className="row clearfix">

                            <div className="big-column col-lg-7 col-md-12 col-sm-12">
                                <div className="footer-lists_outer">
                                    <div className="row clearfix">

                                        <div className="column col-lg-5 col-md-4 col-sm-6">
                                            <h5 className="footer-title">Our Solutions</h5>
                                            <ul className="footer-pages_list">
                                                <li><Link href="/products/ai-chatbot">Intelligent AI Chatbot</Link></li>
                                                <li><Link href="/products/hotel-pms">Hotel PMS System</Link></li>
                                                <li><Link href="/products/ecommerce-sale-bot">E-commerce Sale Bot</Link></li>
                                                <li><Link href="/products">Custom Development</Link></li>
                                            </ul>
                                        </div>

                                        <div className="column col-lg-3 col-md-4 col-sm-6">
                                            <h5 className="footer-title">Resources</h5>
                                            <ul className="footer-pages_list">
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><a href="#">Privacy Policy</a></li>
                                            </ul>
                                        </div>

                                        <div className="column col-lg-4 col-md-4 col-sm-6">
                                            <h5 className="footer-title">Company</h5>
                                            <ul className="footer-pages_list">
                                                <li><Link href="/about">About FueOps</Link></li>
                                                <li><Link href="/contact">Contact Us</Link></li>
                                                <li><a href="#">Careers</a></li>
                                                <li><a href="#">Terms</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="big-column col-lg-5 col-md-12 col-sm-12">
                                <div className="footer-newsletter">
                                    <h5 className="footer-title">Stay Updated</h5>
                                    <div className="footer-newsletter_text">Subscribe to get the latest AI insights and product updates directly to your inbox.</div>
                                    <div className="newsletter-box">
                                        <form method="post" action="#">
                                            <div className="form-group">
                                                <span className="icon fa-regular fa-envelope fa-fw"></span>
                                                <input type="email" name="search-field" placeholder="Enter your email" required />
                                                <button type="submit" className="template-btn btn-style-one">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">Subscribe</span>
                                                        <span className="text-two">Subscribe</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container d-flex justify-content-center">
                        <div className="footer-copyright">&copy; 2026 <Link href="/">FueOps.</Link> All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
