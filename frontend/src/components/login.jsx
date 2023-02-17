import '../styles/login.scss'
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [data, setData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            navigate('/home')
        }
    }, [data])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/login', {
            username: username,
            password: password,
        }).then(response => {
            if (!response.data) {
                setError('Invalid username or password');
            } else {
                setData(response.data)
            }
        });
    }
    
    return(
        <div className="wrapper">
            <h1>Login</h1>
            <div className="wrapper-small">
                <form onSubmit={handleSubmit}>
                    <input value={username || ''} placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <input value={password || ''} placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                    <span>{error}</span><br/>
                    <input type="submit" value="submit"/>
                </form>
                <span>Don't have an account? <a href='./signup'>Sign up</a></span>
            </div>
        </div>
    );
}

export default Login