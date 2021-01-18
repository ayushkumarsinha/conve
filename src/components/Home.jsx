import React from 'react';
import LoginSuccess from "./LoginSuccess.jsx";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        <LoginSuccess />
    }
    render(){
        return(
            <React.Fragment>
                <h3>Home</h3>
                <h4> Login</h4>
                <form>
                    Username : <input type="text" placeholder="username"/><br />
                    Password : <input type="password" placeholder="password"/> <br />
                    <input type="submit" onSubmit={(event) => this.handleSubmit(event)}/>
                    <br />
                    <span><br/></span>
                </form>
            </React.Fragment>
        );
    }
}

export default Home;