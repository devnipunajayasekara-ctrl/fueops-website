import Link from 'next/link';
import Accordion from '@/components/Accordion';
import Script from 'next/script';

export default function ProductsPage() {
    return (
        <>
            {/* Page Title */}
            <section className="page-title">
                <div className="page-title-icon" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-1.png)' }}></div>
                <div className="page-title-icon-two" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-2.png)' }}></div>
                <div className="page-title-shadow" style={{ backgroundImage: 'url(/assets/images/background/page-title-1.png)' }}></div>
                <div className="page-title-shadow_two" style={{ backgroundImage: 'url(/assets/images/background/page-title-2.png)' }}></div>
                <div className="auto-container">
                    <h2>Our Products</h2>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li>Products</li>
                    </ul>
                </div>
            </section>
            {/* End Page Title */}

            {/* Services One */}
            <section className="services-one style-two">
                <div className="auto-container">
                    <div className="row clearfix">

                        {/* Service Block One */}
                        <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="service-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="service-block_one-icon">
                                    <i className="icon-marketing"></i>
                                </div>
                                <h5 className="service-block_one-heading"><Link href="/products/ai-chatbot">Intelligent AI Chatbot</Link></h5>
                                <div className="service-block_one-text">Deploy conversational AI that understands customer intent and delivers human-like interactions 24/7. <span>Perfect for customer support</span> and engagement automation.</div>
                                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="service-block_one-number">01</div>
                                    <Link className="service-block_one-join" href="/products/ai-chatbot"> Learn More <i className="fa-solid fa-plus fa-fw"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Service Block One */}
                        <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="service-block_one-inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="service-block_one-icon">
                                    <i className="icon-cart"></i>
                                </div>
                                <h5 className="service-block_one-heading"><Link href="/products/ecommerce-sale-bot">E-Commerce Sales Bot</Link></h5>
                                <div className="service-block_one-text">Drive sales with an AI assistant designed for online retail. It guides customers, recommends products, and handles <span>checkout inquiries</span> autonomously to reduce cart abandonment.</div>
                                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="service-block_one-number">02</div>
                                    <Link className="service-block_one-join" href="/products/ecommerce-sale-bot">Learn More <i className="fa-solid fa-plus fa-fw"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Service Block One */}
                        <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="service-block_one-inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="service-block_one-icon">
                                    <i className="icon-users"></i>
                                </div>
                                <h5 className="service-block_one-heading"><Link href="/products/hotel-pms">AI Hotel PMS Integration</Link></h5>
                                <div className="service-block_one-text">A complete Property Management System integrated with AI. Guests can access booking details, services, and queries instantly via our <span>smart chat interface</span>, reducing front-desk load.</div>
                                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="service-block_one-number">03</div>
                                    <Link className="service-block_one-join" href="/products/hotel-pms">Learn More <i className="fa-solid fa-plus fa-fw"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Service Block One */}
                        <div className="service-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="service-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="service-block_one-icon">
                                    <i className="icon-tag"></i>
                                </div>
                                <h5 className="service-block_one-heading"><Link href="/services">Custom AI Development</Link></h5>
                                <div className="service-block_one-text">Beyond products, we offer standalone software services. We build <span>tailored AI solutions</span> to fit your unique business infrastructure and transformation goals.</div>
                                <div className="lower-box d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="service-block_one-number">04</div>
                                    <Link className="service-block_one-join" href="/services">Get Quote <i className="fa-solid fa-plus fa-fw"></i></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* End Services One */}

            {/* Video One */}
            <section className="video-one">
                <div className="video-one_image">
                    <img src="/assets/images/background/video-bg.jpg" alt="" />
                    <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video video-one_play"><span className="fa-solid fa-play fa-fw"><i className="ripple"></i></span></a>
                </div>
            </section>
            {/* End Video One */}

            {/* Choose Three */}
            <section className="choose-three">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">

                            {/* Counter Block One */}
                            <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
                                <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="counter-block_one-icon fa-solid fa-briefcase fa-fw"></div>
                                    <div className="counter-block_one-count"><span className="odometer" data-count="10"></span><i>+</i></div>
                                    <div className="counter-block_one-text">Enterprise clients transformed with FueOps solutions.</div>
                                </div>
                            </div>

                            {/* Counter Block One */}
                            <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
                                <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                                    <div className="counter-block_one-icon fa-solid fa-comments fa-fw"></div>
                                    <div className="counter-block_one-count"><span className="odometer" data-count="100000"></span><i>+</i></div>
                                    <div className="counter-block_one-text">Automated interactions processed by our AI Chatbots.</div>
                                </div>
                            </div>

                            {/* Counter Block One */}
                            <div className="counter-block_one col-lg-4 col-md-6 col-sm-12">
                                <div className="counter-block_one-inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="counter-block_one-icon fa-solid fa-star fa-fw"></div>
                                    <div className="counter-block_one-count"><span className="odometer" data-count="99%"></span><i>+</i></div>
                                    <div className="counter-block_one-text">Client satisfaction rate for our Hotel & Finance systems.</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* End Choose Three */}

            {/* Faq One */}
            <section className="faq-one style-three">
                <div className="auto-container">
                    <div className="row clearfix">

                        {/* Tab Column */}
                        <div className="faq-one_title-column col-lg-5 col-md-12 col-sm-12">
                            <div className="faq-one_title-outer">
                                {/* Sec Title */}
                                <div className="sec-title">
                                    <div className="sec-title_title">Support</div>
                                    <h2 className="sec-title_heading">Frequently asked <span>questions</span></h2>
                                    <div className="sec-title_text">Have questions about implementing AI in your business? Here is how FueOps ensures a smooth transition.</div>
                                </div>
                                <div className="faq-one_button">
                                    <Link href="/contact" className="template-btn btn-style-one">
                                        <span className="btn-wrap">
                                            <span className="text-one">Contact now</span>
                                            <span className="text-two">Contact now</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Accordian Column */}
                        <div className="faq-one_accordian-column col-lg-7 col-md-12 col-sm-12">
                            <div className="faq-one_accordian-outer">

                                {/* Accordion Box */}
                                <Accordion items={[
                                    {
                                        question: "How does the Hotel PMS AI integration work?",
                                        answer: "Our PMS utilizes a centralized AI core. When a guest asks a question via chat (e.g., \"What is my checkout time?\"), the AI pulls real-time data from the Property Management System and answers instantly, without staff intervention."
                                    },
                                    {
                                        question: "Can the E-commerce bot handle complex sales queries?",
                                        answer: "Yes. Unlike standard bots, our E-commerce AI is trained on your specific product catalog. It can suggest alternatives, check stock levels, and guide users through the purchasing process to increase conversion rates."
                                    },
                                    {
                                        question: "Do you offer custom software development services?",
                                        answer: "Absolutely. While we have standalone products, FueOps functions as a full-service software partner. We can build custom software or integrate our AI modules into your existing legacy systems."
                                    },
                                    {
                                        question: "How long does it take to deploy the AI Chatbot?",
                                        answer: "Deployment is rapid. For standard integrations, our AI Chatbot can be live within days. Complex integrations requiring deep database connections (like PMS or Finance) typically take 2-4 weeks to fully customize and test."
                                    }
                                ]} />

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* End Faq One */}
        </>
    );
}
