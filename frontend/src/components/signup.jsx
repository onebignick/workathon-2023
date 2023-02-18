import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/signup.scss';
import '../styles/global.scss';

axios.defaults.baseURL = "http://localhost:3001";

const getRoles = async() => {
  return await axios.get("/roles")
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    })
};

const getExperience= async() => {
  return await axios.get("/experience")
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    })
};

const Signup = () => {
    const [userInfo, setUserInfo] = useState({});
    const [roles, setRoles] = useState([]);
    const [experience, setExperience] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("/signup", { userInfo }).then(response => console.log(response))
    }

    const updateUserInfo = (e) => {
      setUserInfo(prev => {
        return {
          ...prev,
          [e.target.name]: e.target.name === "role" || e.target.name === "experience" ? parseInt(e.target.value) : e.target.value,
        }
      })
    }

    useEffect(() => {
      getRoles().then(result => {
        setRoles(result)
      })

      getExperience().then(result => {
        setExperience(result)
      })
    }, [])

    const roleOptions = roles.map(role => {
      return <option key={role[0]} value={role[0]} >{role[1]}</option>
    })

    const experienceOptions = experience.map(exp => {
      return <option key={exp[0]} value={exp[0]} >{exp[1]}</option>
    })

    return(
        <div className="signup-main">
          <form onSubmit={handleSubmit} className="signup-form">
            <h1>Signup</h1>

            {/* <label>
              Username: */}
              <input 
                type="text"
                placeholder="Username" 
                name="username"
                value={userInfo.username ? userInfo.username : ""}
                onChange={updateUserInfo}
                required
                />
            {/* </label> */}

            {/* <label>
              Password: */}
              <input 
                type="password"
                placeholder="Password" 
                name="password"
                value={userInfo.password ? userInfo.password : ""}
                onChange={updateUserInfo}
                required
              />
            {/* </label> */}

            {/* <label>
              Confirm Password: */}
              <input 
                type="password"
                placeholder="Confirm Password" 
                name="cpassword"
                value={userInfo.cpassword ? userInfo.cpassword : ""}
                onChange={updateUserInfo}
                required
              />
            {/* </label> */}

            {/* <label>
              First Name: */}
              <input 
                type="text"
                placeholder="First Name" 
                name="first_name"
                value={userInfo.first_name ? userInfo.first_name : ""}
                onChange={updateUserInfo}
                required
              />
            {/* </label> */}

            {/* <label>
              Last Name: */}
              <input 
                type="text"
                placeholder="Last Name" 
                name="last_name"
                value={userInfo.last_name ? userInfo.last_name : ""}
                onChange={updateUserInfo}
                required
              />
            {/* </label> */}

            {/* <label>
              Email: */}
              <input 
                type="text"
                placeholder="Email" 
                name="email"
                value={userInfo.email ? userInfo.email : ""}
                onChange={updateUserInfo}
                required
              />
            {/* </label> */}

            {/* <label>
              Role: */}
              <select name="role_id" value={userInfo.role_id ? userInfo.role_id : ""} onChange={updateUserInfo} required>
                <option hidden>Select Role</option>
                {roleOptions}
              </select>
            {/* </label> */}

            {/* <label>
              Experience: */}
              <select name="experience_id" value={userInfo.experience_id ? userInfo.experience_id : ""} onChange={updateUserInfo} required>
                <option hidden>Select Experience</option>
                {experienceOptions}
              </select>
            {/* </label> */}

            <input type="submit" value="Register"/>

          </form>
          <div className="signup-login">Already have an account? <a href='./'>Login</a></div>
        </div>
    );
}

export default Signup