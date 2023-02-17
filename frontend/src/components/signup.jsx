import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        axios.post('/signup', {
            username: username,
            password: password,
        }).then(response => console.log(response))
    }

    return(
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <input placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
            <input placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value="submit"/>
          </form>
          <span>Already have an account? <a href='./'>Login</a></span>
        </div>
    );
}

export default Signup