import Link from 'next/link';
import Image from 'next/image';
import Accordion from '@/components/Accordion';

export default function HotelPmsPage() {
    return (
        <>
            {/* Page Title */}
            <section className="page-title">
                <div className="page-title-icon" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-1.png)' }}></div>
                <div className="page-title-icon-two" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-2.png)' }}></div>
                <div className="page-title-shadow" style={{ backgroundImage: 'url(/assets/images/background/page-title-1.png)' }}></div>
                <div className="page-title-shadow_two" style={{ backgroundImage: 'url(/assets/images/background/page-title-2.png)' }}></div>
                <div className="auto-container">
                    <h2>AI Hotel PMS</h2>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li>Hotel PMS</li>
                    </ul>
                </div>
            </section>
            {/* End Page Title */}

            {/* Services Detail */}
            <section className="services-detail">
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title style-four">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div className="left-box">
                                <div className="sec-title_title">Hospitality Automation</div>
                                <h2 className="sec-title_heading">Redefining guest experiences with <span>Intelligent PMS</span> </h2>
                            </div>
                            <div className="right-box">
                                <p>Modern hospitality isn't just about a comfortable bed; it's about instant service. FueOps offers a next-generation Property Management System (PMS) where AI is the core, not an addon. Our system integrates directly with a guest-facing AI Chatbot, allowing guests to manage their entire stay—from booking to room service—without waiting in line at the front desk.</p>
                                <p>For hotel operators, this means a centralized command center. Inventory updates automatically across all channels (OTAs), housekeeping schedules are optimized in real-time based on check-outs, and operational overhead is drastically reduced while guest satisfaction scores soar.</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-detail_image">
                        <img src="/assets/images/resource/service-detail.jpg" alt="" />
                    </div>
                </div>
            </section>
            {/* End Services One */}

            {/* Services Two */}
            <div className="services-two">
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title style-four centered">
                        <div className="sec-title_title">Service benefit</div>
                        <h2 className="sec-title_heading"><span>Benefit</span> of our services</h2>
                    </div>
                    <div className="row clearfix">

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner">
                                <div className="service-block_four-icon">
                                    <i className="icon-heart-hand"></i>
                                </div>
                                <h4 className="service-block_four-title">Internal Operations</h4>
                                <div className="service-block_four-text">Staff can instantly verify live room availability and status updates via our secure internal command chat.</div>
                            </div>
                        </div>

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner">
                                <div className="service-block_four-icon">
                                    <i className="icon-eye"></i>
                                </div>
                                <h4 className="service-block_four-title">Guest Assistant</h4>
                                <div className="service-block_four-text">Guests can check availability, book stays, and resolve inquiries 24/7 via our intelligent AI assistant.</div>
                            </div>
                        </div>

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner">
                                <div className="service-block_four-icon">
                                    <i className="icon-seo"></i>
                                </div>
                                <h4 className="service-block_four-title">Channel Sync</h4>
                                <div className="service-block_four-text">Automatically sync inventory across platforms to prevent overbookings and maximize occupancy.</div>
                            </div>
                        </div>

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner">
                                <div className="service-block_four-icon">
                                    <i className="icon-magnet-1"></i>
                                </div>
                                <h4 className="service-block_four-title">Digital Finance</h4>
                                <div className="service-block_four-text">Automate financial calculations digitally, eliminating the need for manual Excel spreadsheets. <br /><span></span><br /></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* End Services Two */}

            {/* Steps One */}
            <section className="steps-one">
                <div className="steps-one_bg" style={{ backgroundImage: 'url(/assets/images/background/step-1_bg.png)' }}></div>
                <div className="steps-one_icon" style={{ backgroundImage: 'url(/assets/images/icons/step.png)' }}></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="circle-layer"></div>
                        <div className="dots-layer">
                            <span className="dot-one"></span>
                            <span className="dot-two"></span>
                        </div>

                        {/* Sec Title */}
                        <div className="sec-title">
                            <div className="sec-title_title">How Its work</div>
                            <h2 className="sec-title_heading">Streamlining your hotel <br />  operations in <span>a three steps</span></h2>
                        </div>
                        <div className="steps-one_button">
                            <Link href="/contact" className="template-btn btn-style-two">
                                <span className="btn-wrap">
                                    <span className="text-one">Contact Us</span>
                                    <span className="text-two">Contact Us</span>
                                </span>
                            </Link>
                        </div>
                        <div className="row clearfix">
                            {/* Column */}
                            <div className="column col-lg-6 col-md-12 col-sm-12">
                                {/* Step Block One */}
                                <div className="step-block_one">
                                    <div className="step-block_one-inner">
                                        <div className="step-block_one-steps">step 01</div>
                                        <h5 className="step-block_one-title">Centralized Integration</h5>
                                        <div className="step-block_one-text">We connect the PMS to your channel manager, payment gateways, and door lock systems, creating a single source of truth for all hotel data.</div>
                                        <div className="step-block_one-content">
                                            <div className="image">
                                                <img src="/assets/images/resource/step-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Column */}
                            <div className="column col-lg-6 col-md-12 col-sm-12">

                                {/* Step Block One */}
                                <div className="step-block_one">
                                    <div className="step-block_one-inner">
                                        <div className="step-block_one-steps">step 02</div>
                                        <h5 className="step-block_one-title">AI Guest Interaction</h5>
                                        <div className="step-block_one-text">The AI manages all guest inquiries and availability checks via chat while automating the digital check-in process.</div>
                                        <div className="step-block_one-content">
                                            <div className="image">
                                                <img src="/assets/images/resource/step-2.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step Block One */}
                                <div className="step-block_one">
                                    <div className="step-block_one-inner">
                                        <div className="step-block_one-steps">step 03</div>
                                        <h5 className="step-block_one-title">Digital Command & Finance</h5>
                                        <div className="step-block_one-text">Staff coordinate via internal dashboard while the system automatically manages all financial records, completely eliminating manual spreadsheets.</div>
                                        <div className="step-block_one-content">
                                            <div className="image">
                                                <img src="/assets/images/resource/step-3.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Steps One */}

            {/* Solution One */}
            <section className="solution-one">
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title style-four">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div className="left-box">
                                <div className="sec-title_title">Challenges & Solutions</div>
                                <h2 className="sec-title_heading">Solving the front-desk bottleneck <span>bottleneck</span></h2>
                            </div>
                            <div className="right-box">
                                <p>Traditional hotels suffer from peak-hour congestion, overwhelmed staff, and delayed responses to guest needs. FueOps removes the bottleneck by offloading routine tasks to the AI. This allows your front desk staff to focus on high-touch hospitality rather than data entry and phone calls.</p>
                                <ul className="solution-one_list">
                                    <li><i className="fa-solid fa-check fa-fw"></i>Automated check-in and check-out procedures.</li>
                                    <li><i className="fa-solid fa-check fa-fw"></i>Instant invoicing and payment processing via chat.</li>
                                    <li><i className="fa-solid fa-check fa-fw"></i>Real-time availability verification via secure internal command chat.</li>
                                    <li><i className="fa-solid fa-check fa-fw"></i>Automated digital financial tracking to eliminate manual spreadsheets.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                            <div className="service-detail_image-two">
                                <img src="/assets/images/resource/service-detail-1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                            <div className="service-detail_image-two">
                                <a href="https://www.youtube.com/watch?v=kxPCFljwJws" className="lightbox-video service-detail_play"><span className="fa-solid fa-play fa-fw"><i className="ripple"></i></span></a>
                                <img src="/assets/images/resource/service-detail-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            {/* End Solution One */}

            {/* Faq One */}
            <section className="faq-one style-three">
                <div className="auto-container">
                    <div className="row clearfix">

                        {/* Tab Column */}
                        <div className="faq-one_title-column col-lg-5 col-md-12 col-sm-12">
                            <div className="faq-one_title-outer">
                                {/* Sec Title */}
                                <div className="sec-title">
                                    <div className="sec-title_title">faq</div>
                                    <h2 className="sec-title_heading">Frequently asked <span>questions</span></h2>
                                    <div className="sec-title_text">Transitioning to a new PMS is a big step. Here is how FueOps ensures a smooth migration and operation.</div>
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
                                        question: "Does this replace my current Channel Manager?",
                                        answer: "It can. FueOps has a built-in channel manager that connects to major OTAs (Booking.com, Airbnb, Expedia). However, we can also integrate with your existing channel manager if preferred."
                                    },
                                    {
                                        question: "How does the \"AI Chat\" help with bookings?",
                                        answer: "The chat widget on your website acts as a booking agent. It answers questions about amenities (\"Do you have a pool?\") and guides the user directly to the booking engine to complete the reservation."
                                    },
                                    {
                                        question: "Is it suitable for small boutique hotels?",
                                        answer: "Absolutely. Our system is modular. Small hotels benefit from the automation of check-ins/outs, allowing them to operate efficiently with smaller teams."
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
