import { NavLink } from "react-router-dom";
import './LandingPage.css'
import DemoUser from '../DemoUser'

const LandingPage = () => {
    return (
        <div className='page-div'>
            <div className='nav-div'>
                <header className='nav-header'>
                    <nav className='landing-nav'>
                        <NavLink className='logo-link' to='/'>
                            <div className='svg-logo'>SVG LOGO</div>
                        </NavLink>
                        <div>
                            <DemoUser />
                            <NavLink className='nav-btn' to='/login'>
                                Login
                            </NavLink>
                            <NavLink className='nav-btn' to='/register'>
                                Sign Up
                            </NavLink>
                        </div>
                    </nav>
                </header>
            </div>
            <div className='top-row-div'>
                <div className='hero-body'>
                    <div className='hero-text'>
                        <h1 className='imagine'>IMAGINE A PLACE...</h1>
                        <div className='top-mid-div'>
                            ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                        </div>
                    </div>

                    <div className='top-btn-div'>
                        <NavLink className='open-livewire-btn' to='/@me'>
                            <button className='livewire-register' type='button'>Open LiveWire in your browser</button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='row-2-div'>
                <div className='img1-div'></div>
                <div className='description1-div'>
                    <h2>Create an invite-only place where you belong</h2>
                    <div className='description1-text'>
                        LiveWire servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                    </div>
                </div>

            </div>
        </div>

    )
}

export default LandingPage;
