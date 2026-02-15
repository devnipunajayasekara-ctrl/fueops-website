'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function ServicesCarousel() {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                el: '.three-item_carousel-pagination',
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            }}
            className="three-item_carousel swiper-container"
        >
            {/* Slide 1 */}
            <SwiperSlide>
                <div className="service-block_three">
                    <div className="service-block_three-inner">
                        <div className="service-block_three-dots" style={{ backgroundImage: 'url(/assets/images/icons/icon-2.png)' }}></div>
                        <div className="service-block_three-circles" style={{ backgroundImage: 'url(/assets/images/icons/service-three_circle.png)' }}></div>
                        <div className="color-layer"></div>
                        <div className="service-block_three-icon">
                            <i className="icon-cart"></i>
                        </div>
                        <h5 className="service-block_three-heading"><Link href="/products/hotel-pms">Ops Ai Powerd PMS</Link></h5>
                        <div className="service-block_three-text">A complete property management system where staff verify availability via internal chat and guests book stays through an intelligent assistant.</div>
                        <Link className="service-block_three-more" href="/products/hotel-pms">Learn more <i className="fa-solid fa-arrow-right fa-fw"></i></Link>
                    </div>
                </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
                <div className="service-block_three">
                    <div className="service-block_three-inner">
                        <div className="service-block_three-dots" style={{ backgroundImage: 'url(/assets/images/icons/icon-2.png)' }}></div>
                        <div className="service-block_three-circles" style={{ backgroundImage: 'url(/assets/images/icons/service-three_circle.png)' }}></div>
                        <div className="color-layer"></div>
                        <div className="service-block_three-icon">
                            <i className="icon-cart"></i>
                        </div>
                        <h5 className="service-block_three-heading"><Link href="/products/ecommerce-sale-bot">Ops Chat Bot</Link></h5>
                        <div className="service-block_three-text">Boost sales and customer satisfaction with our intelligent e-commerce chatbot. Automate product recommendations, handle inquiries, and provide 24/7 shopping assistance.</div>
                        <Link className="service-block_three-more" href="/products/ecommerce-sale-bot">Learn more <i className="fa-solid fa-arrow-right fa-fw"></i></Link>
                    </div>
                </div>
            </SwiperSlide>

            {/* Slide 3 */}
            {/* <SwiperSlide>
                <div className="service-block_three">
                    <div className="service-block_three-inner">
                        <div className="service-block_three-dots" style={{ backgroundImage: 'url(/assets/images/icons/icon-2.png)' }}></div>
                        <div className="service-block_three-circles" style={{ backgroundImage: 'url(/assets/images/icons/service-three_circle.png)' }}></div>
                        <div className="color-layer"></div>
                        <div className="service-block_three-icon">
                            <i className="icon-magnet"></i>
                        </div>
                        <h5 className="service-block_three-heading"><Link href="/products/ai-chatbot">Intelligent AI Chatbot</Link></h5>
                        <div className="service-block_three-text">Deploy conversational AI that understands context and delivers human-like interactions. Perfect for customer support, lead qualification, and engagement automation.</div>
                        <Link className="service-block_three-more" href="/products/ai-chatbot">Learn more <i className="fa-solid fa-arrow-right fa-fw"></i></Link>
                    </div>
                </div>
            </SwiperSlide> */}

            {/* Slide 4 */}
            <SwiperSlide>
                <div className="service-block_three">
                    <div className="service-block_three-inner">
                        <div className="service-block_three-dots" style={{ backgroundImage: 'url(/assets/images/icons/icon-2.png)' }}></div>
                        <div className="service-block_three-circles" style={{ backgroundImage: 'url(/assets/images/icons/service-three_circle.png)' }}></div>
                        <div className="color-layer"></div>
                        <div className="service-block_three-icon">
                            <i className="icon-diagram"></i>
                        </div>
                        <h5 className="service-block_three-heading"><Link href="/products">AI Financial Management</Link></h5>
                        <div className="service-block_three-text">Revolutionize your financial operations with AI-powered analytics and automation. Get real-time insights, predictive forecasting, and intelligent transaction processing.</div>
                        <Link className="service-block_three-more" href="/products">Learn more <i className="fa-solid fa-arrow-right fa-fw"></i></Link>
                    </div>
                </div>
            </SwiperSlide>

            {/* Slide 5 - Ops 360 PMS */}
            <SwiperSlide>
                <div className="service-block_three">
                    <div className="service-block_three-inner">
                        <div className="service-block_three-dots" style={{ backgroundImage: 'url(/assets/images/icons/icon-2.png)' }}></div>
                        <div className="service-block_three-circles" style={{ backgroundImage: 'url(/assets/images/icons/service-three_circle.png)' }}></div>
                        <div className="color-layer"></div>
                        <div className="service-block_three-icon">
                            <i className="icon-seo"></i>
                        </div>
                        <h5 className="service-block_three-heading"><Link href="/products/ops-360-pms">Ops 360 PMS</Link></h5>
                        <div className="service-block_three-text">All-in-one hotel operations platform. Channel manager, PMS, front desk, and POS unified with AI chat. Staff check availability via chat, management tracks revenue instantly—zero manual work.</div>
                        <Link className="service-block_three-more" href="/products/ops-360-pms">Learn more <i className="fa-solid fa-arrow-right fa-fw"></i></Link>
                    </div>
                </div>
            </SwiperSlide>

            <div className="three-item_carousel-pagination"></div>
        </Swiper>
    );
}
