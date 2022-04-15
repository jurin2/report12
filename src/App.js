import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { Navbar, Nav, Form, FormControl, NavDropdown, Button, CardGroup, Card, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './NavBar';
import srcData from './srcData';
import SecContainer from './SecContainer';


function App() {
  let [blogList,setBlogList] = useState(srcData);
  return (
    <div className="App">
      <NavBar/>

      <section>
        <>
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <SecContainer blogList={blogList} setBlogList={setBlogList}/>
            </Card.Body>
          </Card>
          <br/>
        </>
      </section> 
    </div>
  );
}

export default App;
