import Link from 'next/link';

export default function LoginPage() {
    return (
        <>
            {/* Page Title */}
            <section className="page-title">
                <div className="page-title-icon" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-1.png)' }}></div>
                <div className="page-title-icon-two" style={{ backgroundImage: 'url(/assets/images/icons/page-title_icon-2.png)' }}></div>
                <div className="page-title-shadow" style={{ backgroundImage: 'url(/assets/images/background/page-title-1.png)' }}></div>
                <div className="page-title-shadow_two" style={{ backgroundImage: 'url(/assets/images/background/page-title-2.png)' }}></div>
                <div className="auto-container">
                    <h2>Login now</h2>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li>Login now</li>
                    </ul>
                </div>
            </section>
            {/* End Page Title */}

            {/* Register One */}
            <section className="register-one">
                <div className="auto-container">
                    <div className="inner-container">
                        <h3>Login</h3>
                        <div className="text">Your email address will not be published.</div>

                        {/* Register Form */}
                        <div className="register-form">
                            <form>

                                <div className="form-group">
                                    <label>Name*</label>
                                    <input type="text" name="name" placeholder="" required />
                                </div>

                                <div className="form-group">
                                    <label>Password*</label>
                                    <span className="icon fa-regular fa-eye fa-fw"></span>
                                    <input type="password" name="password" placeholder="" required />
                                </div>

                                <div className="form-group">
                                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                                        <div className="check-box">
                                            <input type="checkbox" name="remember-password" id="type-1" />
                                            <label htmlFor="type-1">Remember Me</label>
                                        </div>
                                        <a className="forgot-psw" href="#">Forget Password?</a>
                                    </div>
                                </div>

                                <div className="form-group">
                                    {/* Button Box */}
                                    <button type="submit" className="submit-btn btn-style-one">
                                        <span className="btn-wrap">
                                            <span className="text-one">login now</span>
                                            <span className="text-two">login now</span>
                                        </span>
                                    </button>
                                </div>

                                <div className="form-group">
                                    <div className="creat-account">Don&apos;t have an account? <Link href="/register">Create a free account</Link></div>
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
