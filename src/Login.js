import React from 'react';

class Login extends React.Component{
    render(){
        return (
            <form>
                <label for='username'/>Username:<label/>
                <br/>
                <input type='text' id='username'/>
                <br/>
                <label for='password'>Password:</label>
                <br/>
                <input type='password' id='password'/>
                <br/>
                <input type='submit'/>
            </form>
        );
    }
}

export default Login;