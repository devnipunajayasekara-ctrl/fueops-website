import Link from 'next/link';

export default function TrustedClients({ title = "Trusted 10+ businesses" }: { title?: string }) {
    return (
        <section className="clients-one">
            <div className="auto-container">
                <div className="inner-container">
                    {/* Sec Title */}
                    <div className="sec-title style-two light centered">
                        <div className="sec-title_title">Trusted partnerships</div>
                        <h2 className="sec-title_heading">{title} <br /></h2>
                    </div>
                    <div className="clients-box_one">
                        <div className="animation_mode">

                            {/* Client Box */}
                            <div className="clients-box">
                                <a href="#">
                                    <img src="/assets/images/clients/weligamabeach.png" alt="" />
                                </a>
                            </div>

                            {/* Client Box */}
                            <div className="clients-box">
                                <a href="#">
                                    <img src="/assets/images/clients/98restaurant.png" alt="98restaurant" />
                                </a>
                            </div>

                            {/* Client Box */}
                            <div className="clients-box">
                                <a href="#">
                                    <img src="/assets/images/clients/epictours.png" alt="epictour" />
                                </a>
                            </div>

                            {/* Client Box */}
                            <div className="clients-box">
                                <a href="#">
                                    <img src="/assets/images/clients/rentbike.png" alt="" />
                                </a>
                            </div>

                            {/* Client Box */}
                            <div className="clients-box">
                                <a href="#">
                                    <img src="/assets/images/clients/beingsurf.png" alt="" />
                                </a>
                            </div>

                            {/* Client Box */}
                            <div className="clients-box">
                                <a href="#">
                                    <img src="/assets/images/clients/weraevents.png" alt="" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
