import { useCallback, useState } from 'react';
import { Navbar, Nav, Form, FormControl, NavDropdown, Button, CardGroup, Card, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

function SecContainer(props){
    return(
        <div className="container">
            {
                props.blogList.map((item,idx,arr)=>{
                    return(
                        <Link key={item.id} to={`/Detail/${item.id}`}>
                            <>
                                <Card 카드={item} index={idx} key={item.id}>
                                    <Card.Img variant="top" src={`https://jurin2.github.io/report12/src/images/img0${item.id}.jpg`}/>
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
            
            <button onClick={()=>{
                props.fnGetData(props.blogList,props.setBlogList); 
            }}>더보기</button>
            <button style={ {marginLeft:'15px'} } onClick={props.writeOpen}>글쓰기</button>
        </div>
    );
}

export default SecContainer;