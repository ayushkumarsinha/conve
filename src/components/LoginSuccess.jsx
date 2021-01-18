import React from 'react';
import About from './About.jsx';
function LoginSuccess (){
    return(
            <>
                <h3>Login Successful!</h3>
                {setTimeout(() => {
                    <About/>
                }, 2000)}
            </>
        );
}

export default LoginSuccess;