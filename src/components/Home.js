import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



function Home({ account, getAccount }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (account) {
            return navigate('/player');
        }
    })


    return (
        <div>
            <h1>Connect Component</h1>
            <Button variant="primary" onClick={getAccount}>
                Connect
            </Button>
        </div>
    );
}

export default Home;
