import Link from 'next/link';
import Accordion from '@/components/Accordion';

export default function Ops360PmsPage() {
    return (
        <>
            {/* Page Title */}
            <section className="page-title">
                <div className="page-title-icon" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-1.png)' }}></div>
                <div className="page-title-icon-two" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-2.png)' }}></div>
                <div className="page-title-shadow" style={{ backgroundImage: 'url(/assets/images/background/page-title-1.png)' }}></div>
                <div className="page-title-shadow_two" style={{ backgroundImage: 'url(/assets/images/background/page-title-2.png)' }}></div>
                <div className="auto-container">
                    <h2>Ops 360 PMS</h2>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li>Ops 360 PMS</li>
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
                                <div className="sec-title_title">Complete Hotel Operations</div>
                                <h2 className="sec-title_heading">Everything connected under <span className="animate-text-gradient">one roof</span> </h2>
                            </div>
                            <div className="right-box">
                                <p>Ops 360 PMS is the only hotel management system you'll ever need. By unifying your channel manager, property management, front desk operations, and point of sale under one intelligent AI-powered platform, we eliminate the chaos of disconnected systems and manual data entry.</p>
                                <p>Front office staff can instantly check room availability, rates, and guest details via our AI chat interface. Management teams access real-time revenue reports, occupancy analytics, and operational insights through the same intelligent assistant. No more switching between multiple systems or waiting for end-of-day reports—everything you need is a simple chat message away.</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-detail_image">
                        <img src="/assets/images/resource/pms.png" alt="Ops 360 PMS Dashboard" />
                    </div>
                </div>
            </section>
            {/* End Services One */}

            {/* Services Two */}
            <div className="services-two">
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title style-four centered">
                        <div className="sec-title_title">Platform benefits</div>
                        <h2 className="sec-title_heading"><span className="animate-text-gradient">Unified</span> operations excellence</h2>
                    </div>
                    <div className="row clearfix !flex !flex-wrap">

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner !h-full">
                                <div className="service-block_four-icon">
                                    <i className="icon-heart-hand"></i>
                                </div>
                                <h4 className="service-block_four-title">All-in-One Platform</h4>
                                <div className="service-block_four-text">Channel manager, PMS, front desk, and POS integrated seamlessly. One system for complete hotel operations.</div>
                            </div>
                        </div>

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner !h-full">
                                <div className="service-block_four-icon">
                                    <i className="icon-eye"></i>
                                </div>
                                <h4 className="service-block_four-title">AI Chat Interface</h4>
                                <div className="service-block_four-text">Staff check availability and rates via chat. Management queries revenue and analytics instantly through AI assistant.</div>
                            </div>
                        </div>

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner !h-full">
                                <div className="service-block_four-icon">
                                    <i className="icon-diagram"></i>
                                </div>
                                <h4 className="service-block_four-title">Automated Financials</h4>
                                <div className="service-block_four-text">Every income and expense flows automatically to PMS. Zero manual spreadsheets, 100% accurate tracking.</div>
                            </div>
                        </div>

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner !h-full">
                                <div className="service-block_four-icon">
                                    <i className="icon-magnet-1"></i>
                                </div>
                                <h4 className="service-block_four-title">Zero Manual Work</h4>
                                <div className="service-block_four-text">Eliminate data entry, manual reconciliation, and spreadsheet management. Complete automation across all operations.</div>
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
                            <div className="sec-title_title">How it works</div>
                            <h2 className="sec-title_heading">Complete hotel automation <br />  in <span className="animate-text-gradient">three steps</span></h2>
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
                                        <h5 className="step-block_one-title">Complete System Integration</h5>
                                        <div className="step-block_one-text">We connect your channel manager, POS systems, payment gateways, and door locks into one unified platform. All data flows automatically between systems.</div>
                                        <div className="step-block_one-content">
                                            <div className="image">
                                                <img src="/assets/images/resource/integration.png" alt="" />
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
                                        <h5 className="step-block_one-title">AI-Powered Operations</h5>
                                        <div className="step-block_one-text">Front office staff query availability, rates, and guest info via AI chat. All transactions from POS automatically update financial records in real-time.</div>
                                        <div className="step-block_one-content">
                                            <div className="image">
                                                <img src="/assets/images/resource/aioperation.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step Block One */}
                                <div className="step-block_one">
                                    <div className="step-block_one-inner">
                                        <div className="step-block_one-steps">step 03</div>
                                        <h5 className="step-block_one-title">Unified Management Dashboard</h5>
                                        <div className="step-block_one-text">Management team accesses revenue reports, occupancy analytics, and operational insights through AI chat. Monitor everything from one central command center.</div>
                                        <div className="step-block_one-content">
                                            <div className="image">
                                                <img src="/assets/images/resource/dashboardpms.png" alt="" />
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
                                <h2 className="sec-title_heading">Eliminating fragmented <span className="animate-text-gradient">hotel systems</span></h2>
                            </div>
                            <div className="right-box">
                                <p>Traditional hotels struggle with disconnected systems requiring manual data transfer between PMS, channel managers, POS, and accounting software. This creates errors, delays, and countless hours of manual reconciliation work. Ops 360 PMS solves this by unifying everything under one intelligent platform.</p>
                                <ul className="solution-one_list">
                                    <li><i className="fa-solid fa-check fa-fw"></i>Staff check room availability and rates instantly via AI chat—no system switching.</li>
                                    <li><i className="fa-solid fa-check fa-fw"></i>Management queries revenue, occupancy, and analytics through AI assistant in real-time.</li>
                                    <li><i className="fa-solid fa-check fa-fw"></i>All POS transactions automatically update financial records—zero manual entry.</li>
                                    <li><i className="fa-solid fa-check fa-fw"></i>Channel manager syncs inventory across all OTAs preventing overbookings.</li>
                                    <li><i className="fa-solid fa-check fa-fw"></i>Complete elimination of manual spreadsheets and data reconciliation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                            <div className="service-detail_image-two">
                                <img src="/assets/images/resource/pms.png" alt="" />
                            </div>
                        </div>
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                            <div className="service-detail_image-two">

                                <img src="/assets/images/resource/dashboard.png" alt="" />
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
                                    <h2 className="sec-title_heading">Frequently asked <span className="animate-text-gradient">questions</span></h2>
                                    <div className="sec-title_text">Ops 360 PMS is a complete transformation of hotel operations. Here's how we make it seamless for your property.</div>
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
                                        question: "What systems does Ops 360 PMS replace?",
                                        answer: "Ops 360 PMS replaces your separate channel manager, PMS, front desk software, POS system, and financial spreadsheets. Everything is unified under one platform with automatic data synchronization across all modules."
                                    },
                                    {
                                        question: "How does the AI chat work for staff and management?",
                                        answer: "Front office staff can ask the AI chat questions like 'What rooms are available tonight?' or 'Show me rates for next weekend.' Management can query 'What's today's revenue?' or 'Show occupancy trends this month.' The AI instantly pulls real-time data from the system and responds conversationally."
                                    },
                                    {
                                        question: "How does automatic financial tracking work?",
                                        answer: "Every transaction—room bookings, restaurant sales, bar purchases, spa services—automatically flows from the POS to the PMS financial module. Income and expenses are categorized and recorded in real-time, eliminating manual spreadsheet entry and ensuring 100% accuracy."
                                    },
                                    {
                                        question: "Can it integrate with our existing POS system?",
                                        answer: "Yes! Ops 360 PMS can integrate with most modern POS systems. We can also provide our integrated POS solution for a completely seamless experience where all sales data flows automatically to your financial records."
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
