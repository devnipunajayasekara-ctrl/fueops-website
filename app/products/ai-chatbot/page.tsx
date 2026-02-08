import Link from 'next/link';
import Accordion from '@/components/Accordion';

export default function AiChatbotPage() {
    return (
        <>
            {/* Page Title */}
            <section className="page-title">
                <div className="page-title-icon" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-1.png)' }}></div>
                <div className="page-title-icon-two" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-2.png)' }}></div>
                <div className="page-title-shadow" style={{ backgroundImage: 'url(/assets/images/background/page-title-1.png)' }}></div>
                <div className="page-title-shadow_two" style={{ backgroundImage: 'url(/assets/images/background/page-title-2.png)' }}></div>
                <div className="auto-container">
                    <h2>Conversational AI</h2>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li>AI Chatbot</li>
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
                                <div className="sec-title_title">Conversational AI</div>
                                <h2 className="sec-title_heading">Revolutionize interaction with <span className="animate-text-gradient">Natural Language</span>Processing</h2>
                            </div>
                            <div className="right-box">
                                <p>In the fast-paced digital world, customers demand instant answers. FueOps Intelligent AI Chatbot isn&apos;t just a script; it&apos;s a sophisticated conversational engine powered by advanced Natural Language Processing (NLP). It understands context, sentiment, and intent, allowing your business to provide human-like support 24/7 without burning out your team.</p>
                                <p>Whether handling FAQs, scheduling appointments, or troubleshooting technical issues, our AI resolves up to 80% of routine inquiries instantly. This allows your human agents to focus on complex, high-value interactions while the AI handles the volume.</p>
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
                                <h4 className="service-block_four-title">24/7 Engagement</h4>
                                <div className="service-block_four-text">Never miss a lead. Our AI engages visitors instantly, day or night, ensuring customers feel valued and heard at all times.</div>
                            </div>
                        </div>

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner">
                                <div className="service-block_four-icon">
                                    <i className="icon-eye"></i>
                                </div>
                                <h4 className="service-block_four-title">Context Aware</h4>
                                <div className="service-block_four-text">Unlike basic bots, our AI remembers conversation history, understanding context to provide accurate, personalized responses.</div>
                            </div>
                        </div>

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner">
                                <div className="service-block_four-icon">
                                    <i className="icon-hand-star"></i>
                                </div>
                                <h4 className="service-block_four-title">Smart Handoff</h4>
                                <div className="service-block_four-text">When a query is too complex, the AI seamlessly transfers the chat to a live agent with a full transcript of the conversation. <br /> <span> </span> <br /></div>
                            </div>
                        </div>

                        {/* Service Block Four */}
                        <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                            <div className="service-block_four-inner">
                                <div className="service-block_four-icon">
                                    <i className="icon-magnet-1"></i>
                                </div>
                                <h4 className="service-block_four-title">Cost Efficiency</h4>
                                <div className="service-block_four-text">Drastically reduce operational costs by automating repetitive tasks and scaling your support capacity without adding headcount.</div>
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
                            <div className="sec-title_title">Workflow</div>
                            <h2 className="sec-title_heading">How FueOps <span className="animate-text-gradient">Integrates in</span></h2>
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
                                        <h5 className="step-block_one-title">Knowledge Integration</h5>
                                        <div className="step-block_one-text">We connect the AI to your existing knowledge base, documents, and website data. It &quot;reads&quot; your business information to build a foundation of truth.</div>
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
                                        <h5 className="step-block_one-title">Training & Customization</h5>
                                        <div className="step-block_one-text">We configure the tone of voice to match your brand and train the model on specific customer intents, ensuring accurate and on-brand responses.</div>
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
                                        <h5 className="step-block_one-title">Deploy & Evolve</h5>
                                        <div className="step-block_one-text">Go live across your website, app or social media. The AI learns from every interaction, becoming smarter and more efficient with every conversation it handles.</div>
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
                                <h2 className="sec-title_heading">Overcoming support bottlenecks with automation</h2>
                            </div>
                            <div className="right-box">
                                <p>High ticket volumes and slow response times kill customer satisfaction. Traditional support models cannot scale linearly without massive costs. FueOps provides a scalable layer of intelligence that sits between your customers and your team, filtering noise and delivering value.</p>
                                <ul className="solution-one_list">
                                    <li><i className="fa-solid fa-check fa-fw"></i>Reduce average response time from hours to seconds.</li>
                                    <li><i className="fa-solid fa-check fa-fw"></i>Handle thousands of concurrent chats simultaneously.</li>
                                    <li><i className="fa-solid fa-check fa-fw"></i>Multilingual support for global customer bases.</li>
                                    <li><i className="fa-solid fa-check fa-fw"></i>Seamless integration with your CRM and Ticket systems.</li>
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
                                    <div className="sec-title_text">Find clear answers regarding our AI Chatbot&apos;s integration process, security protocols, and how it handles complex customer interactions to streamline your support.</div>
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
                                        question: "What happens if the AI doesn't know the answer?",
                                        answer: "We program \"fallback\" protocols. If confidence is low, the AI can suggest related articles, ask clarifying questions, or immediately route the user to a human agent or support ticket form."
                                    },
                                    {
                                        question: "Can the chatbot speak multiple languages?",
                                        answer: "Yes. Our AI engine supports over 50 languages, allowing you to support a global audience without hiring native speakers for every region. It auto-detects the user's language instantly."
                                    },
                                    {
                                        question: "How is this different from a standard rule-based bot?",
                                        answer: "Rule-based bots follow a strict \"if/then\" tree and fail when users go off-script. FueOps uses Generative AI and NLP to understand intent and context, allowing for natural, fluid conversations similar to speaking with a human."
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
