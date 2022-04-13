import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import mystore from './store';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';

function Login() {

    let navigate = useNavigate();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const submitForm=(ev)=>{
        ev.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers :{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }
        fetch("http://localhost:8080/login",reqOptions)
        .then(resp=> resp.json())
        .then(obj=> { console.log(obj);
            //setUser(obj);
            //console.log(user);
            localStorage.setItem("loggedinuser" , JSON.stringify(obj));
            //console.log(localStorage.getItem("loggedinuser").loginid.role);
            //console.log(user.fname);
            mystore.dispatch({type: 'LOGGEDIN'});
            console.log(mystore.getState().loggedin);
            console.log(localStorage.getItem("loggedinuser").role);
            let role = (JSON.parse(localStorage.getItem("loggedinuser"))).role;
            console.log(role);
            if(obj[3]=='admin')
            {
                navigate("/Admin");
            }
            else if(obj[3]=='client')
            {
                navigate("/Client");
            }
            else if(obj[3]=='manager')
            {
                navigate("/Manager");
            }
            else if(obj[3]=='employee')
            {
                navigate("/Employee");
            }
            
    });
}

    return (
        <div className="container">
            <Form>
                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Username</Form.Label>
                    <Form.Control type="text" name="username" placeholder="Enter username" onChange={(ev)=>setUsername(ev.target.value) }/>
                 </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" onChange={(ev)=>setPassword(ev.target.value) }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> 
                <Button variant="primary" type="submit" onClick={(ev)=>submitForm(ev)}>
                    Login
                </Button>  */}
                <div style={{ width: '23rem' }}>
                    <MDBInput label='Enter username' name='username' type='text' size='lg' onChange={(ev)=>setUsername(ev.target.value)}/>
                    <br />

                    <MDBInput label='Enter password' name='password' type='password' size='lg' onChange={(ev)=>setPassword(ev.target.value)}/>
                    <br />
                    <MDBBtn type="submit" onClick={(ev)=>submitForm(ev)}>Login</MDBBtn>
                </div>
            </Form>
            
            </div>
    );
}

export default Login;