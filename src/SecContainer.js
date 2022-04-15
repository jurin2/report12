import { Navbar, Nav, Form, FormControl, NavDropdown, Button, CardGroup, Card, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

function SecContainer(props){
    return(
        <div className="container">
            {
                props.blogList.map((item)=>{
                    return(
                        <Link key={item.id} to={`/${item.id}`}>
                            <>
                                <Card>
                                    <Card.Img variant="top" src={`https://raw.githubusercontent.com/jurin2/report12/main/images/img${item.id}.jpg`}/>
                                    <Card.Body>
                                        <h2 style={ {color:'#343a40', textDecoration:'none'} }>{item.title}</h2>
                                        <p style={ {color:'#343a40', textDecoration:'none'} }>{item.content}</p>
                                    </Card.Body>
                                </Card>
                                <br/>
                            </>
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default SecContainer;