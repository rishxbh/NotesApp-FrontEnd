import React from 'react';
import './AuthPage.css';
const AuthPage = () => {
    return (
        <div>
            <div className="page">
                <div className="main">
                    <div className="signup">
                        <input type="text" placeholder='Firstname' className='firstname'/>
                        <input type="text" placeholder='Lastname' className='lastname'/>
                        <input type="email" placeholder='Mail Id' className='email'/>
                        <div className="gender">
                            <label htmlFor="female">Female
                                <input type="radio" name="female" id="female" value={"female"} /></label>
                            <label htmlFor="male">Male
                                <input type="radio" name="male" id="male" value={"male"} /></label>
                        </div>
                        <input type="password" placeholder='Password' name="password" id="password" className='password'/>
                    </div>
                    <div className="signin">2</div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage