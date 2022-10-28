import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



function Home({ account, isConnected, getAccount }) {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("isConnected", isConnected)
        if (isConnected && account) {
            // navigate('/player', { replace: true, state: { account: account, isConnect: isConnected } })
            return navigate('/player');
        }
    })


    return (
        <div>
            <h1>Connect Component</h1>
            {/* <ConnectButton getAccount={{ getAccount }} /> */}
            <Button variant="primary" onClick={getAccount}>
                Connect
            </Button>
        </div>
    );
}

export default Home;
