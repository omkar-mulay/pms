import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import mystore from './store';
import { Form } from "react-bootstrap";
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

            localStorage.setItem("loggedinuser" , JSON.stringify(obj));
            
            mystore.dispatch({type: 'LOGGEDIN'});
            
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
        
        <div className="container" style={{width: '40%', height:'50%', marginTop: '8%', marginLeft: '25', marginRight: '25%', border: '1px'}}>
            <span style={{margin: '10px'}}></span>
            <Form>
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