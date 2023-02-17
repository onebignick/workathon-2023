import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/user')
        .then((response) => {
            if (!response.data) {
                navigate('/')
            } else {
                setData(response.data)
            }
        })
    }, [data])

    const handleLogout = () => {
        axios.post('/logout').then((response) => setData(response.data));
    }

    return(
        <div>
            Hello World!
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;