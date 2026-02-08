import Link from 'next/link';
import ServicesCarousel from '../components/ServicesCarousel';
import MouseParticles from '../components/MouseParticles';

export default function Home() {
  return (
    <>
      {/* Banner One */}
      {/* Banner One */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Background Gradients */}
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#0a0a0a] to-[#0a0a0a]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#761FE3] rounded-full blur-[150px] opacity-10 pointer-events-none animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D093E8] rounded-full blur-[180px] opacity-5 pointer-events-none animate-blob animation-delay-2000"></div>

        {/* Animated Background Elements (Optional for "Antigravity" feel) */}
        <MouseParticles />

        <div className="auto-container relative z-10 text-center pt-20">
          <div className="inner-container max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-gray-300 font-medium">
              Next-Gen AI Automation
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
              Intelligent <br />
              <span className="animate-text-gradient">
                AI-Powered Solutions
              </span>
            </h1>

            <p className="relative z-20 !text-xs md:!text-sm !text-[#f0f0f0] font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Transform your business operations with FueOps cutting-edge AI technology, designed for speed, precision, and scalability.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full">
              <Link href="/contact" className="animate-bg-gradient group relative box-border inline-flex items-center justify-center min-w-[200px] h-[60px] px-8 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-900/40 overflow-hidden whitespace-nowrap">
                <span className="relative z-10">Get Started Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link href="/products" className="box-border inline-flex items-center justify-center min-w-[200px] h-[60px] px-8 bg-transparent border border-white/20 hover:border-[#761FE3] text-white hover:text-[#761FE3] rounded-full font-semibold transition-all duration-300 hover:bg-white/5 whitespace-nowrap">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Main Banner One */}
      {/* End Main Banner One */}

      {/* Assistance One */}
      <section className="assistance-one">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title style-two centered">
            <div className="sec-title_title">our ai solutions</div>
            <h2 className="sec-title_heading">Explore the power of our <br /> <span>AI products</span></h2>
          </div>
          <ServicesCarousel />

        </div>
      </section>
      {/* End Assistance One */}

      {/* Business Automation */}
      <section className="livechat">
        <div className="auto-container">
          <div className="row clearfix">

            {/* Image Column */}
            <div className="livechat_image-column col-lg-6 col-md-12 col-sm-12">
              <div className="livechat_image-outer">
                <div className="livechat-agent"><i><img src="/assets/images/icons/livechat-stars.png" alt="" /></i></div>
                <div className="livechat-layer" style={{ backgroundImage: 'url(/assets/images/background/service-three_bg.png)' }}></div>
                <div className="livechat-icon" style={{ backgroundImage: 'url(/assets/images/icons/livechat-icon.png)' }}></div>
                <div className="color-layer"></div>
                <img src="/assets/images/resource/livechat.png" alt="FueOps AI Chatbot" />
              </div>
            </div>

            {/* Content Column */}
            <div className="livechat_content-column col-lg-6 col-md-12 col-sm-12">
              <div className="livechat_content-outer">
                {/* Sec Title */}
                <div className="sec-title style-two title-anim">
                  <div className="sec-title_title">BUSINESS TRANSFORMATION</div>
                  <h2 className="sec-title_heading">Scale your operations with <span>Intelligent</span> Business Automation</h2>
                  <div className="sec-title_text">FueOps provides a unified layer of digital intelligence that connects your staff, customers, and data. By automating routine complexities across your enterprise, we empower your team to focus on high-value strategy while our systems ensure every business interaction is handled with precision, speed, and 24/7 reliability.</div>
                </div>
                <ul className="livechat-list">
                  <li><i className="fa-solid fa-check fa-fw"></i> <b>Unified Intelligence:</b> Synchronize every department through a single, data-driven AI ecosystem.</li>
                  <li><i className="fa-solid fa-check fa-fw"></i> <b>Scalable Solutions:</b> Implement adaptive AI tools that grow alongside your existing business infrastructure.</li>
                  <li><i className="fa-solid fa-check fa-fw"></i> <b>Seamless Integration:</b> Bridge the gap between your current legacy software and modern AI capabilities.</li>
                </ul>
                <div className="livechat-options d-flex align-items-center flex-wrap">
                  <div className="livechat_button">
                    <Link href="/about" className="template-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Learn more</span>
                        <span className="text-two">Learn more</span>
                      </span>
                    </Link>
                  </div>
                  <Link className="livechat-now" href="/contact"><i><img src="/assets/images/icons/chat.png" alt="" /></i> Contact us</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* End Business Automation */}

      {/* Counter One */}
      <section className="counter-one">
        <div className="auto-container">
          <div className="inner-container">
            {/* Sec Title */}
            <div className="sec-title style-two centered">
              <div className="sec-title_title">why choose us</div>
              <h2 className="sec-title_heading">Trusted by innovative companies <br /> <span>worldwide</span></h2>
            </div>
            <div className="row clearfix">

              {/* Counter Block Two */}
              <div className="counter-block_two col-lg-3 col-md-6 col-sm-6">
                <div className="counter-block_two-inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="color-layer"></div>
                  <div className="counter-block_two-count"><span className="odometer" data-count="10"></span><i>+</i></div>
                  <h5 className="counter-block_two-title">Enterprise Clients</h5>
                  <div className="counter-block_two-text">Businesses transformed with FueOps AI and PMS solutions.</div>
                </div>
              </div>

              {/* Counter Block Two */}
              <div className="counter-block_two col-lg-3 col-md-6 col-sm-6">
                <div className="counter-block_two-inner wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
                  <div className="color-layer"></div>
                  <div className="counter-block_two-count"><span className="odometer" data-count="1"></span><i>M+</i></div>
                  <h5 className="counter-block_two-title">AI Interactions</h5>
                  <div className="counter-block_two-text">Automated conversations processed across our global network.</div>
                </div>
              </div>

              {/* Counter Block Two */}
              <div className="counter-block_two col-lg-3 col-md-6 col-sm-6">
                <div className="counter-block_two-inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                  <div className="color-layer"></div>
                  <div className="counter-block_two-count"><span className="odometer" data-count="0"></span><i></i></div>
                  <h5 className="counter-block_two-title">Manual Sheets</h5>
                  <div className="counter-block_two-text">Our clients have replaced 100% of their manual financial spreadsheets.</div>
                </div>
              </div>

              {/* Counter Block Two */}
              <div className="counter-block_two col-lg-3 col-md-6 col-sm-6">
                <div className="counter-block_two-inner wow fadeInLeft" data-wow-delay="450ms" data-wow-duration="1500ms">
                  <div className="color-layer"></div>
                  <div className="counter-block_two-count"><span className="odometer" data-count="99"><i>%</i></span></div>
                  <h5 className="counter-block_two-title">Satisfaction</h5>
                  <div className="counter-block_two-text">Braine is the leading chat tool.</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* End Counter One */}

      <section className="conversation-one">
        <div className="auto-container">

          <div className="product-showcase-carousel swiper-container">
            <div className="swiper-wrapper">

              <div className="swiper-slide">
                <div className="row clearfix">
                  <div className="conversation-one_content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="conversation-one_content-outer">
                      <div className="sec-title style-two">
                        <div className="sec-title_title">CONVERSATIONAL AI</div>
                        <h2 className="sec-title_heading">Intelligent <span>AI Chatbot</span> for Business</h2>
                        <div className="sec-title_text">Deploy conversational AI that understands customer intent and delivers human-like interactions 24/7. Perfect for automating support and lead qualification.</div>
                      </div>
                      <ul className="livechat-list">
                        <li><i className="fa-solid fa-check fa-fw"></i>Natural language processing capabilities</li>
                        <li><i className="fa-solid fa-check fa-fw"></i>24/7 automated customer engagement</li>
                        <li><i className="fa-solid fa-check fa-fw"></i>Seamless CRM and platform integration</li>
                      </ul>
                      <div className="livechat-options d-flex align-items-center flex-wrap">
                        <div className="livechat_button">
                          <Link href="/ai-chatbot" className="template-btn btn-style-one">
                            <span className="btn-wrap"><span className="text-one">Learn more</span><span className="text-two">Learn more</span></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-one_chat-column col-lg-6 col-md-12 col-sm-12">
                    <div className="conversation-one_chat-outer">
                      <div className="conversation-one_image"><img src="/assets/images/resource/chats.png" alt="AI Chatbot" /></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="row clearfix">
                  <div className="conversation-one_content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="conversation-one_content-outer">
                      <div className="sec-title style-two">
                        <div className="sec-title_title">HOSPITALITY SOLUTIONS</div>
                        <h2 className="sec-title_heading">Transform Hospitality with <span>AI Hotel PMS</span></h2>
                        <div className="sec-title_text">A centralized system connecting your front desk and guests. Staff check availability via internal chat while guests enjoy automated check-ins.</div>
                      </div>
                      <ul className="livechat-list">
                        <li><i className="fa-solid fa-check fa-fw"></i>Internal command chat for hotel staff</li>
                        <li><i className="fa-solid fa-check fa-fw"></i>Real-time guest availability inquiries</li>
                        <li><i className="fa-solid fa-check fa-fw"></i>Automated digital financial tracking</li>
                      </ul>
                      <div className="livechat-options d-flex align-items-center flex-wrap">
                        <div className="livechat_button">
                          <Link href="/hotel-pms" className="template-btn btn-style-one">
                            <span className="btn-wrap"><span className="text-one">Learn more</span><span className="text-two">Learn more</span></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-one_chat-column col-lg-6 col-md-12 col-sm-12">
                    <div className="conversation-one_chat-outer">
                      <div className="conversation-one_image"><img src="/assets/images/resource/skill.png" alt="Hotel PMS" /></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="row clearfix">
                  <div className="conversation-one_content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="conversation-one_content-outer">
                      <div className="sec-title style-two">
                        <div className="sec-title_title">E-COMMERCE EXCELLENCE</div>
                        <h2 className="sec-title_heading">Drive Sales with <span>E-commerce AI</span></h2>
                        <div className="sec-title_text">Analyzes customer behavior in real-time to suggest relevant products and answer stock queries instantly. High conversion driven by smart upsells.</div>
                      </div>
                      <ul className="livechat-list">
                        <li><i className="fa-solid fa-check fa-fw"></i>Smart product recommendation engine</li>
                        <li><i className="fa-solid fa-check fa-fw"></i>Automated cart recovery system</li>
                        <li><i className="fa-solid fa-check fa-fw"></i>Real-time live stock inventory access</li>
                      </ul>
                      <div className="livechat-options d-flex align-items-center flex-wrap">
                        <div className="livechat_button">
                          <Link href="/ecommerce-sale-bot" className="template-btn btn-style-one">
                            <span className="btn-wrap"><span className="text-one">Learn more</span><span className="text-two">Learn more</span></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-one_chat-column col-lg-6 col-md-12 col-sm-12">
                    <div className="conversation-one_chat-outer">
                      <div className="conversation-one_image"><img src="/assets/images/resource/chats.png" alt="E-commerce AI" /></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide">
                <div className="row clearfix">
                  <div className="conversation-one_content-column col-lg-6 col-md-12 col-sm-12">
                    <div className="conversation-one_content-outer">
                      <div className="sec-title style-two">
                        <div className="sec-title_title">FINANCIAL INTELLIGENCE</div>
                        <h2 className="sec-title_heading">Financial Management <span>AI Transformation</span></h2>
                        <div className="sec-title_text">Revolutionize financial operations with AI-powered analytics and automation. Eliminate manual spreadsheets and manage all financial data digitally.</div>
                      </div>
                      <ul className="livechat-list">
                        <li><i className="fa-solid fa-check fa-fw"></i>Automated transaction processing</li>
                        <li><i className="fa-solid fa-check fa-fw"></i>Predictive financial analytics</li>
                        <li><i className="fa-solid fa-check fa-fw"></i>Real-time financial reporting dashboards</li>
                      </ul>
                      <div className="livechat-options d-flex align-items-center flex-wrap">
                        <div className="livechat_button">
                          <Link href="/financial-management" className="template-btn btn-style-one">
                            <span className="btn-wrap"><span className="text-one">Learn more</span><span className="text-two">Learn more</span></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="conversation-one_chat-column col-lg-6 col-md-12 col-sm-12">
                    <div className="conversation-one_chat-outer">
                      <div className="conversation-one_image"><img src="/assets/images/resource/skill.png" alt="Financial AI" /></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      {/* Clients One */}
      <section className="clients-one">
        <div className="auto-container">
          <div className="inner-container">
            {/* Sec Title */}
            <div className="sec-title style-two light centered">
              <div className="sec-title_title">Trusted partnerships</div>
              <h2 className="sec-title_heading"><span>Trusted 3000+</span> businesses <br /> & online stores</h2>
            </div>
            <div className="clients-box_one">
              <div className="animation_mode">

                {/* Client Box */}
                <div className="clients-box">
                  <a href="#">
                    <img src="/assets/images/clients/1.png" alt="" />
                  </a>
                </div>

                {/* Client Box */}
                <div className="clients-box">
                  <a href="#">
                    <img src="/assets/images/clients/2.png" alt="" />
                  </a>
                </div>

                {/* Client Box */}
                <div className="clients-box">
                  <a href="#">
                    <img src="/assets/images/clients/3.png" alt="" />
                  </a>
                </div>

                {/* Client Box */}
                <div className="clients-box">
                  <a href="#">
                    <img src="/assets/images/clients/4.png" alt="" />
                  </a>
                </div>

                {/* Client Box */}
                <div className="clients-box">
                  <a href="#">
                    <img src="/assets/images/clients/5.png" alt="" />
                  </a>
                </div>

                {/* Client Box */}
                <div className="clients-box">
                  <a href="#">
                    <img src="/assets/images/clients/6.png" alt="" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Clients One */}

      <br /><br /><br /><br />

      {/* Testimonial Two */}
      <section className="testimonial-two">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title style-two">
            <div className="sec-title_title">TESTIMONIAL</div>
            <h2 className="sec-title_heading">What our respectable <br /> <span>clients says</span></h2>
          </div>
          <div className="inner-container">
            <div className="single-item_carousel swiper-container">
              <div className="swiper-wrapper">

                {/* Slide */}
                <div className="swiper-slide">
                  {/* Testimonial Block Two */}
                  <div className="testimonial-block_two">
                    <div className="testimonial-block_two-inner">
                      <div className="row clearfix">
                        {/* Content Column */}
                        <div className="testimonial-block_two-content-column col-lg-7 col-md-12 col-sm-12">
                          <div className="testimonial-block_two-content-outer">
                            <div className="testimonial-block_two-rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                            </div>
                            <div className="testimonial-block_two-text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare maximus ante.</div>
                            <div className="testimonial-block_two-author_box">
                              <div className="testimonial-block_two-author-image">
                                <img src="/assets/images/resource/author-5.png" alt="" />
                              </div>
                              Sara Ven <span>Social Media Manger</span>
                            </div>
                          </div>
                        </div>
                        {/* Image Column */}
                        <div className="testimonial-block_two-image-column col-lg-5 col-md-8 col-sm-12">
                          <div className="testimonial-block_two-image-outer">
                            <div className="testimonial-block_two-quote fa-solid fa-quote-left fa-fw"></div>
                            <div className="testimonial-block_two-image">
                              <img src="/assets/images/resource/testimonial.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Slide */}
                <div className="swiper-slide">
                  {/* Testimonial Block Two */}
                  <div className="testimonial-block_two">
                    <div className="testimonial-block_two-inner">
                      <div className="row clearfix">
                        {/* Content Column */}
                        <div className="testimonial-block_two-content-column col-lg-7 col-md-12 col-sm-12">
                          <div className="testimonial-block_two-content-outer">
                            <div className="testimonial-block_two-rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                            </div>
                            <div className="testimonial-block_two-text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare maximus ante.</div>
                            <div className="testimonial-block_two-author_box">
                              <div className="testimonial-block_two-author-image">
                                <img src="/assets/images/resource/author-5.png" alt="" />
                              </div>
                              Sara Ven <span>Social Media Manger</span>
                            </div>
                          </div>
                        </div>
                        {/* Image Column */}
                        <div className="testimonial-block_two-image-column col-lg-5 col-md-8 col-sm-12">
                          <div className="testimonial-block_two-image-outer">
                            <div className="testimonial-block_two-quote fa-solid fa-quote-left fa-fw"></div>
                            <div className="testimonial-block_two-image">
                              <img src="/assets/images/resource/testimonial.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Slide */}
                <div className="swiper-slide">
                  {/* Testimonial Block Two */}
                  <div className="testimonial-block_two">
                    <div className="testimonial-block_two-inner">
                      <div className="row clearfix">
                        {/* Content Column */}
                        <div className="testimonial-block_two-content-column col-lg-7 col-md-12 col-sm-12">
                          <div className="testimonial-block_two-content-outer">
                            <div className="testimonial-block_two-rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                            </div>
                            <div className="testimonial-block_two-text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare maximus ante.</div>
                            <div className="testimonial-block_two-author_box">
                              <div className="testimonial-block_two-author-image">
                                <img src="/assets/images/resource/author-5.png" alt="" />
                              </div>
                              Sara Ven <span>Social Media Manger</span>
                            </div>
                          </div>
                        </div>
                        {/* Image Column */}
                        <div className="testimonial-block_two-image-column col-lg-5 col-md-8 col-sm-12">
                          <div className="testimonial-block_two-image-outer">
                            <div className="testimonial-block_two-quote fa-solid fa-quote-left fa-fw"></div>
                            <div className="testimonial-block_two-image">
                              <img src="/assets/images/resource/testimonial.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
          {/* If we need pagination */}
          <div className="single-item_carousel-pagination"></div>

          <div className="testimonial-two_arrows">
            {/* If we need navigation buttons */}
            <div className="single-item_carousel-prev fa-solid fa-angle-left fa-fw"></div>
            <div className="single-item_carousel-next fa-solid fa-angle-right fa-fw"></div>
          </div>

        </div>
      </section>
      {/* End Testimonial Two */}

      {/* Tools One */}
      <section className="tools-one">
        <div className="tools-one_shadow" style={{ backgroundImage: 'url(/assets/images/background/tools-one_shadow.png)' }}></div>
        <div className="tools-one_bg" style={{ backgroundImage: 'url(/assets/images/background/tools-bg.png)' }}></div>
        <div className="tools-one_bg-two" style={{ backgroundImage: 'url(/assets/images/background/testimonial-one_bg.png)' }}></div>
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title style-two centered">
            <div className="sec-title_title">Integrations</div>
            <h2 className="sec-title_heading">Incorporate our tool into <br /> your <span>everyday tasks</span></h2>
          </div>
          <div className="animation_mode_three clearfix">

            {/* Social Block One */}
            <div className="social-block_one">
              <div className="social-block_one-inner">
                <div className="social-block_one-icon">
                  <i><img src="/assets/images/icons/social-15.png" alt="" /></i>
                </div>
                <h5 className="social-block_one-title"><a href="#">Discord</a></h5>
                <div className="social-block_one-text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</div>
                <a className="social-block_one-more" href="#">Learn more <i className="fa-solid fa-plus fa-fw"></i></a>
              </div>
            </div>

            {/* Social Block One */}
            <div className="social-block_one">
              <div className="social-block_one-inner">
                <div className="social-block_one-icon">
                  <i><img src="/assets/images/icons/social-16.png" alt="" /></i>
                </div>
                <h5 className="social-block_one-title"><a href="#">Telegram</a></h5>
                <div className="social-block_one-text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</div>
                <a className="social-block_one-more" href="#">Learn more <i className="fa-solid fa-plus fa-fw"></i></a>
              </div>
            </div>

            {/* Social Block One */}
            <div className="social-block_one">
              <div className="social-block_one-inner">
                <div className="social-block_one-icon">
                  <i><img src="/assets/images/icons/social-17.png" alt="" /></i>
                </div>
                <h5 className="social-block_one-title"><a href="#">Whatsapp</a></h5>
                <div className="social-block_one-text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</div>
                <a className="social-block_one-more" href="#">Learn more <i className="fa-solid fa-plus fa-fw"></i></a>
              </div>
            </div>

            {/* Social Block One */}
            <div className="social-block_one">
              <div className="social-block_one-inner">
                <div className="social-block_one-icon">
                  <i><img src="/assets/images/icons/social-18.png" alt="" /></i>
                </div>
                <h5 className="social-block_one-title"><a href="#">Messenger</a></h5>
                <div className="social-block_one-text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</div>
                <a className="social-block_one-more" href="#">Learn more <i className="fa-solid fa-plus fa-fw"></i></a>
              </div>
            </div>

            {/* Social Block One */}
            <div className="social-block_one">
              <div className="social-block_one-inner">
                <div className="social-block_one-icon">
                  <i><img src="/assets/images/icons/social-19.png" alt="" /></i>
                </div>
                <h5 className="social-block_one-title"><a href="#">Pinterest</a></h5>
                <div className="social-block_one-text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</div>
                <a className="social-block_one-more" href="#">Learn more <i className="fa-solid fa-plus fa-fw"></i></a>
              </div>
            </div>

            {/* Social Block One */}
            <div className="social-block_one">
              <div className="social-block_one-inner">
                <div className="social-block_one-icon">
                  <i><img src="/assets/images/icons/social-20.png" alt="" /></i>
                </div>
                <h5 className="social-block_one-title"><a href="#">Zoom</a></h5>
                <div className="social-block_one-text">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.</div>
                <a className="social-block_one-more" href="#">Learn more <i className="fa-solid fa-plus fa-fw"></i></a>
              </div>
            </div>

          </div>

          <div className="tools-one_button text-center">
            <Link href="/about" className="template-btn btn-style-one">
              <span className="btn-wrap">
                <span className="text-one">Learn more</span>
                <span className="text-two">Learn more</span>
              </span>
            </Link>
          </div>

        </div>
      </section>
      {/* End Tools One */}

      {/* News One */}
      <section className="news-one style-two">
        <div className="news-one_shadow-two" style={{ backgroundImage: 'url(/assets/images/background/news-shadow-2.png)' }}></div>
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title style-two">
            <div className="d-flex justify-content-between align-items-end flex-wrap">
              <div className="left-box">
                <div className="sec-title_title">OUR BLOG</div>
                <h2 className="sec-title_heading">Read our latest <span>blogs</span></h2>
              </div>
              <div className="news-two_button">
                <div className="livechat_button">
                  <Link href="/about" className="template-btn btn-style-one">
                    <span className="btn-wrap">
                      <span className="text-one">Learn more</span>
                      <span className="text-two">Learn more</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="three-item_carousel swiper-container">
            <div className="swiper-wrapper">

              {/* Slide */}
              <div className="swiper-slide">
                {/* News Block One */}
                <div className="news-block_one">
                  <div className="news-block_one-inner">
                    <div className="news-block_one-image">
                      <Link href="/blog"><img src="/assets/images/resource/news-1.jpg" alt="" /></Link>
                    </div>
                    <div className="news-block_one-content">
                      <div className="news-block_one-time">By Admin <span>6 min read</span></div>
                      <h5 className="news-block_one-title"><Link href="/blog">Transforming industries and shaping the future</Link></h5>
                      <Link className="news-block_one-more" href="/blog">Read more <i className="fa-solid fa-plus fa-fw"></i></Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                {/* News Block One */}
                <div className="news-block_one">
                  <div className="news-block_one-inner">
                    <div className="news-block_one-image">
                      <Link href="/blog"><img src="/assets/images/resource/news-2.jpg" alt="" /></Link>
                    </div>
                    <div className="news-block_one-content">
                      <div className="news-block_one-time">By Admin <span>6 min read</span></div>
                      <h5 className="news-block_one-title"><Link href="/blog">Exploring the cutting-edge of artificial intelligence</Link></h5>
                      <Link className="news-block_one-more" href="/blog">Read more <i className="fa-solid fa-plus fa-fw"></i></Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide */}
              <div className="swiper-slide">
                {/* News Block One */}
                <div className="news-block_one">
                  <div className="news-block_one-inner">
                    <div className="news-block_one-image">
                      <Link href="/blog"><img src="/assets/images/resource/news-3.jpg" alt="" /></Link>
                    </div>
                    <div className="news-block_one-content">
                      <div className="news-block_one-time">By Admin <span>6 min read</span></div>
                      <h5 className="news-block_one-title"><Link href="/blog">Understanding the basics of artificial intelligence</Link></h5>
                      <Link className="news-block_one-more" href="/blog">Read more <i className="fa-solid fa-plus fa-fw"></i></Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* If we need pagination */}
            <div className="three-item_carousel-pagination"></div>
          </div>
        </div>
      </section>
      {/* End News One */}
    </>
  );
}
