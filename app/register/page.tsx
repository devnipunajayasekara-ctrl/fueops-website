import Link from 'next/link';

export default function RegisterPage() {
    return (
        <>
            {/* Page Title */}
            <section className="page-title">
                <div className="page-title-icon" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-1.png)' }}></div>
                <div className="page-title-icon-two" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-2.png)' }}></div>
                <div className="page-title-shadow" style={{ backgroundImage: 'url(/assets/images/background/page-title-1.png)' }}></div>
                <div className="page-title-shadow_two" style={{ backgroundImage: 'url(/assets/images/background/page-title-2.png)' }}></div>
                <div className="auto-container">
                    <h2>Register now</h2>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li>Registration now</li>
                    </ul>
                </div>
            </section>
            {/* End Page Title */}

            {/* Register One */}
            <section className="register-one">
                <div className="auto-container">
                    <div className="inner-container">
                        <h3>Registration</h3>
                        <div className="text">Your email address will not be published.</div>

                        {/* Register Form */}
                        <div className="register-form">
                            <form>

                                <div className="form-group">
                                    <label>Name*</label>
                                    <input type="text" name="name" placeholder="" required />
                                </div>

                                <div className="form-group">
                                    <label>Email*</label>
                                    <input type="text" name="email" placeholder="" required />
                                </div>

                                <div className="form-group">
                                    <label>Password*</label>
                                    <span className="icon fa-regular fa-eye fa-fw"></span>
                                    <input type="password" name="password" placeholder="" required />
                                </div>

                                <div className="form-group">
                                    {/* Button Box */}
                                    <button type="submit" className="btn-style-one submit-btn template-btn">
                                        <span className="btn-wrap">
                                            <span className="text-one">Join now</span>
                                            <span className="text-two">Join now</span>
                                        </span>
                                    </button>
                                </div>

                                <div className="form-group">
                                    <div className="creat-account">Already have a account? <Link href="/login">Login Now</Link></div>
                                </div>

                            </form>
                        </div>
                        {/* End Default Form */}

                    </div>
                </div>
            </section>
            {/* End Register One */}
        </>
    );
}
