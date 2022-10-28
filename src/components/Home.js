import Button from "react-bootstrap/Button";

// function ConnectButton({ getAccount }) {
//     return (
//         <Button variant="primary" onClick={getAccount}>
//             Connect
//         </Button>
//     );
// }

function Home({ getAccount }) {
    //   console.log("inside home:", playerAccount);
    //   const [account, setAccount, getAccount] = playerAccount;

    // after click button, should redirect to player page

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
