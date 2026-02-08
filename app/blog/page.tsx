import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
    return (
        <>
            {/* Page Title */}
            <section className="page-title">
                <div className="page-title-icon" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-1.png)' }}></div>
                <div className="page-title-icon-two" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-2.png)' }}></div>
                <div className="page-title-shadow" style={{ backgroundImage: 'url(/assets/images/background/page-title-1.png)' }}></div>
                <div className="page-title-shadow_two" style={{ backgroundImage: 'url(/assets/images/background/page-title-2.png)' }}></div>
                <div className="auto-container">
                    <h2>Our blog</h2>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li>Blog</li>
                    </ul>
                </div>
            </section>
            {/* End Page Title */}

            {/* News Three */}
            <section className="news-three">
                <div className="auto-container">
                    <div className="row clearfix">

                        {/* News Block One */}
                        <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="news-block_one-inner">
                                <div className="news-block_one-image">
                                    <a href="#"><img src="/assets/images/resource/news-7.jpg" alt="" /></a>
                                </div>
                                <div className="news-block_one-content">
                                    <div className="news-block_one-time">By Admin <span>6 min read</span></div>
                                    <h5 className="news-block_one-title"><a href="#">Beyond code the human element in ai development</a></h5>
                                    <a className="news-block_one-more" href="#">Read more <i className="fa-solid fa-plus fa-fw"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* News Block One */}
                        <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="news-block_one-inner">
                                <div className="news-block_one-image">
                                    <a href="#"><img src="/assets/images/resource/news-8.jpg" alt="" /></a>
                                </div>
                                <div className="news-block_one-content">
                                    <div className="news-block_one-time">By Admin <span>6 min read</span></div>
                                    <h5 className="news-block_one-title"><a href="#">Exploring the cutting-edge of artificial intelligence</a></h5>
                                    <a className="news-block_one-more" href="#">Read more <i className="fa-solid fa-plus fa-fw"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* News Block One */}
                        <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="news-block_one-inner">
                                <div className="news-block_one-image">
                                    <a href="#"><img src="/assets/images/resource/news-9.jpg" alt="" /></a>
                                </div>
                                <div className="news-block_one-content">
                                    <div className="news-block_one-time">By Admin <span>6 min read</span></div>
                                    <h5 className="news-block_one-title"><a href="#">Understanding the basics of artificial intelligence</a></h5>
                                    <a className="news-block_one-more" href="#">Read more <i className="fa-solid fa-plus fa-fw"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* News Block One */}
                        <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="news-block_one-inner">
                                <div className="news-block_one-image">
                                    <a href="#"><img src="/assets/images/resource/news-10.jpg" alt="" /></a>
                                </div>
                                <div className="news-block_one-content">
                                    <div className="news-block_one-time">By Admin <span>6 min read</span></div>
                                    <h5 className="news-block_one-title"><a href="#">Transforming industries and shaping the future</a></h5>
                                    <a className="news-block_one-more" href="#">Read more <i className="fa-solid fa-plus fa-fw"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* News Block One */}
                        <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="news-block_one-inner">
                                <div className="news-block_one-image">
                                    <a href="#"><img src="/assets/images/resource/news-11.jpg" alt="" /></a>
                                </div>
                                <div className="news-block_one-content">
                                    <div className="news-block_one-time">By Admin <span>6 min read</span></div>
                                    <h5 className="news-block_one-title"><a href="#">Diving deep exploring the core algorithms of our ai</a></h5>
                                    <a className="news-block_one-more" href="#">Read more <i className="fa-solid fa-plus fa-fw"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* News Block One */}
                        <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="news-block_one-inner">
                                <div className="news-block_one-image">
                                    <a href="#"><img src="/assets/images/resource/news-12.jpg" alt="" /></a>
                                </div>
                                <div className="news-block_one-content">
                                    <div className="news-block_one-time">By Admin <span>6 min read</span></div>
                                    <h5 className="news-block_one-title"><a href="#">The art and science of building intelligent machines</a></h5>
                                    <a className="news-block_one-more" href="#">Read more <i className="fa-solid fa-plus fa-fw"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* News Block One */}
                        <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="news-block_one-inner">
                                <div className="news-block_one-image">
                                    <a href="#"><img src="/assets/images/resource/news-13.jpg" alt="" /></a>
                                </div>
                                <div className="news-block_one-content">
                                    <div className="news-block_one-time">By Admin <span>6 min read</span></div>
                                    <h5 className="news-block_one-title"><a href="#">Navigating the ai front challenges and triumphs</a></h5>
                                    <a className="news-block_one-more" href="#">Read more <i className="fa-solid fa-plus fa-fw"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* News Block One */}
                        <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="news-block_one-inner">
                                <div className="news-block_one-image">
                                    <a href="#"><img src="/assets/images/resource/news-14.jpg" alt="" /></a>
                                </div>
                                <div className="news-block_one-content">
                                    <div className="news-block_one-time">By Admin <span>6 min read</span></div>
                                    <h5 className="news-block_one-title"><a href="#">Innovation unleashed: behind the scenes our ai breakthroughs</a></h5>
                                    <a className="news-block_one-more" href="#">Read more <i className="fa-solid fa-plus fa-fw"></i></a>
                                </div>
                            </div>
                        </div>

                        {/* News Block One */}
                        <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
                            <div className="news-block_one-inner">
                                <div className="news-block_one-image">
                                    <a href="#"><img src="/assets/images/resource/news-15.jpg" alt="" /></a>
                                </div>
                                <div className="news-block_one-content">
                                    <div className="news-block_one-time">By Admin <span>6 min read</span></div>
                                    <h5 className="news-block_one-title"><a href="#">Decoding the future: ai&apos;s impact on the industries</a></h5>
                                    <a className="news-block_one-more" href="#">Read more <i className="fa-solid fa-plus fa-fw"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Styled Pagination */}
                    <ul className="styled-pagination text-center">
                        <li><a href="#" className="active">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li className="next"><a href="#"><span className="fa-solid fa-angle-right fa-fw"></span></a></li>
                    </ul>
                    {/* End Styled Pagination */}

                </div>
            </section>
            {/* End News Three */}
        </>
    );
}
