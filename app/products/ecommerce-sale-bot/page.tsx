import Link from 'next/link';
import Accordion from '@/components/Accordion';
import Image from 'next/image';

export default function EcommerceSaleBotPage() {
    return (
        <>
            {/* Page Title */}
            <section className="page-title">
                <div className="page-title-icon" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-1.png)' }}></div>
                <div className="page-title-icon-two" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-2.png)' }}></div>
                <div className="page-title-shadow" style={{ backgroundImage: 'url(/assets/images/background/page-title-1.png)' }}></div>
                <div className="page-title-shadow_two" style={{ backgroundImage: 'url(/assets/images/background/page-title-2.png)' }}></div>
                <div className="auto-container">
                    <h2>AI Shopping Assistant</h2>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li>E-commerce Chatbot</li>
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
                                <div className="sec-title_title">AI Shopping Assistant</div>
                                <h2 className="sec-title_heading">Turn visitors into buyers with <span className="animate-text-gradient">Conversational </span>Commerce</h2>
                            </div>
                            <div className="right-box">
                                <p>Static product pages are a thing of the past. FueOps E-commerce Sales Bot acts as a proactive digital sales associate, living on your store 24/7. It greets visitors, understands their shopping needs, and guides them directly to the products they want, replicating the in-store experience online.</p>
                                <p>Beyond simple greetings, our AI is built to sell. It detects hesitation to prevent cart abandonment, suggests personalized add-ons to increase Average Order Value (AOV), and answers sizing or shipping questions instantly to remove purchase barriers.</p>
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
                        <h2 className="sec-title_heading"><span className="animate-text-gradient">Benefit</span> of our services</h2>
                    </div>
                    <div className="row clearfix">

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner">
                                <div className="service-block_four-icon">
                                    <i className="icon-heart-hand"></i>
                                </div>
                                <h4 className="service-block_four-title">Personalized Sales</h4>
                                <div className="service-block_four-text">The AI analyzes browsing behavior to recommend products tailored specifically to each visitor&apos;s taste and budget.</div>
                            </div>
                        </div>

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner">
                                <div className="service-block_four-icon">
                                    <i className="icon-eye"></i>
                                </div>
                                <h4 className="service-block_four-title">24/7 Sales Agent</h4>
                                <div className="service-block_four-text">Capture sales from night owls and international shoppers. Your store remains staffed and ready to close deals at any hour.</div>
                            </div>
                        </div>

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner">
                                <div className="service-block_four-icon">
                                    <i className="icon-seo"></i>
                                </div>
                                <h4 className="service-block_four-title">Real-Time Inventory</h4>
                                <div className="service-block_four-text">Access your live stock database instantly to show customers exact product availability. <br /> <span></span><br /></div>
                            </div>
                        </div>

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner">
                                <div className="service-block_four-icon">
                                    <i className="icon-magnet-1"></i>
                                </div>
                                <h4 className="service-block_four-title">Smart Upselling</h4>
                                <div className="service-block_four-text">Automatically suggest matching accessories or bundle deals at the perfect moment to boost your revenue per customer.</div>
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
                            <h2 className="sec-title_heading">Launching your <br /> AI Sales Agent in <span className="animate-text-gradient">three steps</span></h2>
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
                                        <h5 className="step-block_one-title">Catalog Sync</h5>
                                        <div className="step-block_one-text">We integrate the bot directly with your product feed (Shopify, WooCommerce, etc.), allowing it to &quot;know&quot; every item, price, and stock level instantly.</div>
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
                                        <h5 className="step-block_one-title">Sales Training</h5>
                                        <div className="step-block_one-text">We configure the AI&apos;s sales tactics—whether you want it to be helpful and subtle, or aggressive with promotions—and set up brand-specific Q&A.</div>
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
                                        <h5 className="step-block_one-title">Go Live & Convert</h5>
                                        <div className="step-block_one-text">The bot launches on your storefront. It immediately begins assisting shoppers, tracking sales attribution, and learning which pitches work best.</div>
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
                                <h2 className="sec-title_heading">Removing barriers to checkout</h2>
                            </div>
                            <div className="right-box">
                                <p>Most e-commerce stores lose 70% of shoppers to cart abandonment due to unanswered questions or navigation fatigue. Customers want to buy, but they get stuck. FueOps removes this friction by providing instant answers to &quot;Is this in stock?&quot; or &quot;When will it arrive?&quot; right at the critical moment of decision.</p>
                                <ul className="solution-one_list">
                                    <li><i className="fa-solid fa-check fa-fw"></i>Instant answers to sizing and material questions.</li>
                                    <li><i className="fa-solid fa-check fa-fw"></i>Drive revenue with personalized product upsells.</li>
                                    <li><i className="fa-solid fa-check fa-fw"></i>Real-time inventory checks during conversation.</li>
                                    <li><i className="fa-solid fa-check fa-fw"></i>Seamless handoff to human agents for high-value VIPs.</li>
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
                                    <h2 className="sec-title_heading">Frequently asked <span className="animate-text-gradient">questions</span></h2>
                                    <div className="sec-title_text">Maximize your store&apos;s potential. Here are common questions about deploying our E-commerce Sales Bot.</div>
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
                                        question: "Does this integrate with Shopify or WooCommerce?",
                                        answer: "Yes, FueOps integrates seamlessly with major platforms like Shopify, WooCommerce, Wix, and Custom Website. We sync with your inventory in real-time so the bot never sells an out-of-stock item."
                                    },
                                    {
                                        question: "Can the bot actually process the checkout?",
                                        answer: "The bot guides users to the final checkout step and can even populate the cart for them. For security, the final payment is handled via your standard secure payment gateway."
                                    },
                                    {
                                        question: "Can it recommend products based on images?",
                                        answer: "Yes! Our advanced vision capabilities allow users to upload a photo (e.g., \"Do you have a shirt like this?\"), and the bot will find the closest match in your inventory."
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
