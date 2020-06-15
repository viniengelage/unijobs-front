import React from 'react';

import CardSignUp from '../components/CardSignUp'
import FormRegister from '../components/FormRegister'
import Footer from '../components/Footer'

import './SignUp.css';

function SignUp(props) {
    return (
    <div className="sign-box">
        <CardSignUp>
            <FormRegister icon="FaUserCircle"/>
        </CardSignUp>
        <Footer/>
    </div>
    )
}

export default SignUp;