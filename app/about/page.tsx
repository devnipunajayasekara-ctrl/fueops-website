import Link from 'next/link';
import TestimonialCarousel from '@/components/TestimonialCarousel';

export default function About() {
    return (
        <>
            {/* Page Title */}
            <section className="page-title">
                <div className="page-title-icon" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-1.png)' }}></div>
                <div className="page-title-icon-two" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-2.png)' }}></div>
                <div className="page-title-shadow" style={{ backgroundImage: 'url(/assets/images/background/page-title-1.png)' }}></div>
                <div className="page-title-shadow_two" style={{ backgroundImage: 'url(/assets/images/background/page-title-2.png)' }}></div>
                <div className="auto-container">
                    <h2>About us</h2>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li>About us</li>
                    </ul>
                </div>
            </section>
            {/* End Page Title */}

            {/* Story One */}
            <section className="story-one">
                <div className="auto-container">
                    <div className="row clearfix">

                        {/* Image Column */}
                        <div className="story-one_image-column col-lg-6 col-md-12 col-sm-12">
                            <div className="story-one_image-outer">
                                <div className="story-one_image">
                                    <img src="/assets/images/resource/story.png" alt="FueOps AI Innovation Story" />
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="story-one_content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="story-one_content-outer">
                                {/* Sec Title */}
                                <div className="sec-title style-four">
                                    <div className="sec-title_title">Our story</div>
                                    <h2 className="sec-title_heading">Pioneering the future of <span className="animate-text-gradient">AI-powered</span> business solutions</h2>
                                </div>
                                <p>FueOps was founded with a clear vision: to democratize artificial intelligence and make cutting-edge technology accessible to businesses of all sizes. Our journey began when a team of AI specialists and software engineers recognized the growing gap between technological advancement and practical business implementation.</p>
                                <p>From our first intelligent chatbot to our comprehensive AI financial management system, each product we develop solves real business challenges. We've partnered with e-commerce platforms, financial institutions, and enterprises across 3+ countries, transforming how they engage customers and manage operations through intelligent automation.</p>
                                <div className="story-one_button">
                                    <Link href="/contact" className="template-btn btn-style-one">
                                        <span className="btn-wrap">
                                            <span className="text-one">Partner with us</span>
                                            <span className="text-two">Partner with us</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* End Assistance One */}

            {/* Value One */}
            <section className="value-one">
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title style-four centered">
                        <div className="sec-title_title">core values</div>
                        <h2 className="sec-title_heading">The principles that <span className="animate-text-gradient">drive FueOps</span> <br /> forward every day.</h2>
                    </div>
                    <div className="row clearfix !flex !flex-wrap">

                        {/* Value Block One */}
                        <div className="value-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="value-block_one-inner !h-full">
                                <div className="value-block_one-icon">
                                    <i className="icon-users-4"></i>
                                </div>
                                <h5 className="value-block_one-title">Customer Success</h5>
                                <div className="value-block_one-text">We measure our success by the impact our AI solutions create for our clients. Every chatbot conversation, every automated transaction, and every insight generated is designed to drive tangible business results and customer satisfaction.</div>
                            </div>
                        </div>

                        {/* Value Block One */}
                        <div className="value-block_one active col-lg-4 col-md-6 col-sm-12">
                            <div className="value-block_one-inner !h-full">
                                <div className="value-block_one-icon">
                                    <i className="icon-bulb1"></i>
                                </div>
                                <h5 className="value-block_one-title">Innovation</h5>
                                <div className="value-block_one-text">Continuous innovation is at the heart of FueOps. We invest heavily in research and development, staying ahead of AI trends to deliver solutions that leverage the latest advancements in machine learning, natural language processing, and predictive analytics.</div>
                            </div>
                        </div>

                        {/* Value Block One */}
                        <div className="value-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="value-block_one-inner !h-full">
                                <div className="value-block_one-icon">
                                    <i className="fa-solid fa-bullseye fa-fw"></i>
                                </div>
                                <h5 className="value-block_one-title">Excellence</h5>
                                <div className="value-block_one-text">Quality is non-negotiable at FueOps. From code architecture to customer support, we maintain the highest standards in everything we do. Our 99% accuracy rate and exceptional client retention reflect our unwavering commitment to excellence.</div>
                            </div>
                        </div>

                    </div>

                    {/* Button Box */}
                    <div className="value-one_button text-center">
                        <Link href="/contact" className="template-btn btn-style-two">
                            <span className="btn-wrap">
                                <span className="text-one">Join FueOps today</span>
                                <span className="text-two">Join FueOps today</span>
                            </span>
                        </Link>
                    </div>

                </div>
            </section>
            {/* End Value One */}

            {/* Team One */}
            <section className="team-one">
                <div className="auto-container">
                    <div className="row clearfix">
                        {/* Title Column */}
                        <div className="team-one_title-column col-lg-4 col-md-12 col-sm-12">
                            <div className="team-one_title-outer">
                                {/* Sec Title */}
                                <div className="sec-title style-four">
                                    <div className="sec-title_title">Our team</div>
                                    <h2 className="sec-title_heading">Meet the minds <span className="animate-text-gradient">behind FueOps</span></h2>
                                    <div className="sec-title_text">Our diverse team of AI engineers, data scientists, and business strategists brings decades of combined experience in machine learning, software development, and digital transformation.</div>
                                </div>
                            </div>
                        </div>

                        {/* Team Column */}
                        <div className="team-one_team-column col-lg-8 col-md-12 col-sm-12">
                            <div className="team-one_team-outer">
                                <div className="row clearfix">

                                    {/* Team Block One */}
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="team-block_one">
                                            <div className="team-block_one-inner">
                                                <div className="team-block_one-image">
                                                    <Link href="#"><img src="/assets/images/resource/team-1.jpg" alt="" className="max-h-[350px] w-full object-cover" /></Link>
                                                </div>
                                                <div className="team-block_one-content">
                                                    <h4 className="team-block_one-title"><Link href="#">Elliot S. Acevedo</Link></h4>
                                                    <div className="team-block_one-designation">Founder</div>
                                                    {/* Social Box */}
                                                    <div className="team-block_one-socials">
                                                        <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                                        <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                                                        <a href="https://linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Team Block Two */}
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="team-block_one">
                                            <div className="team-block_one-inner">
                                                <div className="team-block_one-image">
                                                    <Link href="#"><img src="/assets/images/resource/team-2.jpg" alt="" className="max-h-[350px] w-full object-cover" /></Link>
                                                </div>
                                                <div className="team-block_one-content">
                                                    <h4 className="team-block_one-title"><Link href="#">Sarah Mitchell</Link></h4>
                                                    <div className="team-block_one-designation">Co-Founder</div>
                                                    {/* Social Box */}
                                                    <div className="team-block_one-socials">
                                                        <a href="https://facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
                                                        <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                                                        <a href="https://linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
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
            </section>
            {/* End Team One */}

            {/* Testimonial Two */}
            <section className="testimonial-two">
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title style-two">
                        <div className="sec-title_title">Success Stories</div>
                        <h2 className="sec-title_heading">Our clients share their <br /> business <span className="animate-text-gradient">transformation</span></h2>
                    </div>
                    <TestimonialCarousel />
                </div>
            </section>
            {/* End Testimonial Two */}

            {/* Clients Two */}
            <section className="clients-two">
                <div className="auto-container">
                    {/* Sec Title */}
                    <div className="sec-title centered">
                        <div className="sec-title_title">Trusted Organizations</div>
                    </div>
                    <div className="clients_slider swiper-container">
                        <div className="swiper-wrapper">

                            {/* Slide */}
                            <div className="swiper-slide">
                                <div className="client-image">
                                    <Link href="#"><img src="/assets/images/clients/1.png" alt="" /></Link>
                                </div>
                            </div>

                            {/* Slide */}
                            <div className="swiper-slide">
                                <div className="client-image">
                                    <Link href="#"><img src="/assets/images/clients/2.png" alt="" /></Link>
                                </div>
                            </div>

                            {/* Slide */}
                            <div className="swiper-slide">
                                <div className="client-image">
                                    <Link href="#"><img src="/assets/images/clients/3.png" alt="" /></Link>
                                </div>
                            </div>

                            {/* Slide */}
                            <div className="swiper-slide">
                                <div className="client-image">
                                    <Link href="#"><img src="/assets/images/clients/4.png" alt="" /></Link>
                                </div>
                            </div>

                            {/* Slide */}
                            <div className="swiper-slide">
                                <div className="client-image">
                                    <Link href="#"><img src="/assets/images/clients/5.png" alt="" /></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* End Clients Two */}
        </>
    );
}
