// import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom';


function Header({ account }) {

  const homeLink = account ? <Link to='/player'>Home</Link> : <Link to='/'>Home</Link>

  return (
    <div>
      <Navbar>
          <Navbar.Brand>{homeLink}</Navbar.Brand>
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
