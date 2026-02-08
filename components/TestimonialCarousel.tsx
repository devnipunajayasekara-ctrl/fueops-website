'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialCarousel() {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
    const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);

    return (
        <>
            <div className="inner-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: prevEl || undefined,
                        nextEl: nextEl || undefined,
                    }}
                    pagination={{
                        el: paginationEl || undefined,
                        clickable: true,
                    }}
                    onBeforeInit={(swiper) => {
                        // Ensure navigation/pagination elements are assigned
                        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                            if (prevEl) swiper.params.navigation.prevEl = prevEl;
                            if (nextEl) swiper.params.navigation.nextEl = nextEl;
                        }
                        if (swiper.params.pagination && typeof swiper.params.pagination !== 'boolean') {
                            if (paginationEl) swiper.params.pagination.el = paginationEl;
                        }
                    }}
                    speed={500}
                    className="single-item_carousel"
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
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
                                            <div className="testimonial-block_two-text">Working with FueOps was a game-changer for our boutique hotel chain. Their AI system understands our brand voice perfectly and handles everything from booking inquiries to special requests. The implementation was seamless, and the team provided exceptional support throughout. Highly recommended!</div>
                                            <div className="testimonial-block_two-author_box">
                                                <div className="testimonial-block_two-author-image">
                                                    <img src="/assets/images/resource/author-2.png" alt="" />
                                                </div>
                                                Larry K. Lund <span>Social Media Manager</span>
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
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
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
                                            <div className="testimonial-block_two-text">FueOps delivered exactly what they promised. The AI chatbot integrated perfectly with our inventory system and CRM. Customer satisfaction improved dramatically, and we're processing three times more inquiries with the same support team. The ROI was evident within the first month.</div>
                                            <div className="testimonial-block_two-author_box">
                                                <div className="testimonial-block_two-author-image">
                                                    <img src="/assets/images/resource/author-3.png" alt="" />
                                                </div>
                                                Marian R. Vieira <span>Social Media Manager</span>
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
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
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
                                            <div className="testimonial-block_two-text">As a multi-location business, we needed consistency across all touchpoints. FueOps' AI solutions provided unified automation that maintains our brand standards while adapting to local needs. The financial management module alone saved us countless hours of manual reconciliation work.</div>
                                            <div className="testimonial-block_two-author_box">
                                                <div className="testimonial-block_two-author-image">
                                                    <img src="/assets/images/resource/author-4.png" alt="" />
                                                </div>
                                                Bob E. Wiggins <span>Social Media Manager</span>
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
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Pagination */}
            <div
                className="single-item_carousel-pagination"
                ref={(node) => setPaginationEl(node)}
            ></div>

            {/* Navigation Arrows */}
            <div className="testimonial-two_arrows">
                <div
                    className="single-item_carousel-prev fa-solid fa-angle-left fa-fw"
                    ref={(node) => setPrevEl(node)}
                ></div>
                <div
                    className="single-item_carousel-next fa-solid fa-angle-right fa-fw"
                    ref={(node) => setNextEl(node)}
                ></div>
            </div>
        </>
    );
}
