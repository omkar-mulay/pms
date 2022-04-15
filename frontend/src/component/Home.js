import { React, useState } from "react";
import { Container, Nav, Navbar, Overlay } from "react-bootstrap";
import pic from "../image/Home.jpeg"

function Home() {
    
    return (
        <div className="overlay">
            <div className="content">
                <div className="content">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            {/*<Navbar.Brand href="/" style={{textAlign : "center"}}><span style={{ margin: '10px' }}></span>Project Management System</Navbar.Brand>*/}
                            <span style={{ margin: '10px' }}></span>
                            <Nav className="me-auto">
                                <Nav.Link href="/login">Login</Nav.Link>
                               
                            </Nav>
                        </Container>
                    </Navbar>
                    <img src = {pic} width="100%" height="660px" /><br />
                   
                </div>
            </div>
        </div>
    )
}

export default Home;