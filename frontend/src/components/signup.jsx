import { useState } from "react";
import axios from "axios";

const Signup = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState({});

    const handleSubmit = () => {
        axios.post('/signup', {
            userInfo
        }).then(response => console.log(response))
    }

    const updateUserInfo = (e) => {
      setUserInfo(prev => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        }
      })
    }
    console.log(userInfo)
    return(
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Signup</h1>

            <label>
              Username:
              <input 
                type="text"
                placeholder="Username" 
                name="username"
                value={userInfo.username ? userInfo.username : ""}
                onChange={updateUserInfo}
                />
            </label>

            <label>
              Password:
              <input 
                type="password"
                placeholder="Password" 
                name="password"
                value={userInfo.password ? userInfo.password : ""}
                onChange={updateUserInfo}
              />
            </label>

            <label>
              Confirm Password:
              <input 
                type="password"
                placeholder="Confirm Password" 
                name="cpassword"
                value={userInfo.cpassword ? userInfo.cpassword : ""}
                onChange={updateUserInfo}
              />
            </label>

            <label>
              First Name:
              <input 
                type="text"
                placeholder="First Name" 
                name="first_name"
                value={userInfo.first_name ? userInfo.first_name : ""}
                onChange={updateUserInfo}
              />
            </label>

            <label>
              Last Name:
              <input 
                type="text"
                placeholder="Last Name" 
                name="last_name"
                value={userInfo.last_name ? userInfo.last_name : ""}
                onChange={updateUserInfo}
              />
            </label>

            <label>
              Email:
              <input 
                type="text"
                placeholder="Email" 
                name="email"
                value={userInfo.email ? userInfo.email : ""}
                onChange={updateUserInfo}
              />
            </label>

            <label>
              Role:
              <select name="role" value={userInfo.role ? userInfo.role : ""} onChange={updateUserInfo}>

              </select>
            </label>

            <label>
              Experience:
              <select name="experience" value={userInfo.experience ? userInfo.experience : ""} onChange={updateUserInfo}>
                
              </select>
            </label>

            <input type="submit" value="submit"/>

          </form>
          <span>Already have an account? <a href='./'>Login</a></span>
        </div>
    );
}

export default Signup