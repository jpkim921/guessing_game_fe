// import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header({ account }) {
  // console.log("hello", playerAccount);
  // const { account } = playerAccount;

  return (
    <div>
      <Navbar>
          <Navbar.Brand href={account ? "/player" : "/"}>Home</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {account ? (
              <Navbar.Text>Connected with: {account}</Navbar.Text>
            ) : (
              <Navbar.Text>Connect to Play</Navbar.Text>
            )}
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
