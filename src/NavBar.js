import { Navbar, Nav, Form, FormControl, NavDropdown, Button, CardGroup, Card, Image } from 'react-bootstrap';

function NavBar(props){
    return(
      <Navbar bg="dark" expand="lg" style={ {justifyContent:'center'} }>
        <Navbar.Brand href="#home" style={ {fontSize:'30px', color:'#fff'} }>My Blog</Navbar.Brand>
      </Navbar>
    );
  }

export default NavBar;