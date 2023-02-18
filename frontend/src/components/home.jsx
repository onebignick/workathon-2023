import '../styles/home.scss';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return(
        <div>
            <h1>Are you ready to find your dream job?</h1>
            <button onClick={()=>navigate('/login')}>Log in</button>
            <button onclick={()=>navigate('/signup')}>Sign up</button>
        </div>
    );
};

export default Home;