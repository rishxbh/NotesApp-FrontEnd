import React, { useRef } from 'react';
import './AuthPage.css';
import noteImg from '../assets/noteImg.jpg'

const AuthPage = () => {
    const switchToIn = (e) => {
        // e.preventDefault();
        main.current.classList.remove('main');
        main.current.classList.add('mainIn');
        signup.current.classList.remove('signup');
        signup.current.classList.add('invisiblesignup');
        signin.current.classList.remove('invisiblesignin');
        signin.current.classList.add('signin');
        imageDiv.current.classList.remove('imgright')
        imageDiv.current.classList.add('imgleft');
    }
    const switchToUp = e => {
        // e.preventDefault();
        main.current.classList.remove('mainIn');
        main.current.classList.add('main');
        signup.current.classList.remove('invisiblesignup');
        signup.current.classList.add('signup');
        signin.current.classList.remove('signin');
        signin.current.classList.add('invisiblesignin');
        imageDiv.current.classList.remove('imgleft')
        imageDiv.current.classList.add('imgright');
    }
    const imageDiv = useRef();
    const main = useRef();
    const signup = useRef();
    const signin = useRef();
    return (
        <div>
            <div className="page">
                <div className="main" ref={main}>
                    <div className="signup" ref={signup}>
                        <form action="" method="post">
                            <div className='firstname'>
                                <input type="text" placeholder='Firstname' />
                            </div>
                            <div className="lastname">
                                <input type="text" placeholder='Lastname' />
                            </div>
                            <div className="email">
                                <input type="email" placeholder='Mail Id' />
                            </div>
                            <div className="gender">
                                <label htmlFor="female" className='female'>Female
                                    <input type="radio" name="gender" id="female" value={"female"} /></label>
                                <span className="tab"></span>
                                <label htmlFor="male" className='male'>Male
                                    <input type="radio" name="gender" id="male" value={"male"} /></label>
                            </div>
                            <div className="password">
                                <input type="password" placeholder='Password' name="password" id="password"  />
                            </div>

                            <button className="signupBtn" type="submit">Sign Up</button>
                        </form>
                        <div className='switch' onClick={switchToIn}>Already a member? Sign In</div>
                    </div>
                    <div className='borderr'></div>
                    <div className="invisiblesignin" ref={signin}>
                        <form action="" method="post">
                            <div className="signinemail">
                            <input type="email" placeholder='User Id' name='email' />
                            </div>
                            <div className="signinpass">
                            <input type="password" placeholder='Password' name="password" id="password"  />
                            </div>
                            <button className="signinBtn" type="submit">Sign In</button>
                        </form>
                        <div className='switch' onClick={switchToUp}>Not a member? Sign Up</div>
                    </div>
                    <div ref={imageDiv} className="imgright">
                        <img src={noteImg} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage