import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import mystore from './store';

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
            console.log(localStorage.getItem("loggedinuser"));
            let role = (JSON.parse(localStorage.getItem("loggedinuser"))).role;
            console.log(obj[1]);
            if(obj[1]=='admin')
            {
                navigate("/Admin");
            }
            else if(obj[1]=='client')
            {
                navigate("/Client");
            }
            else if(obj[1]=='manager')
            {
                navigate("/Manager");
            }
            else if(obj[1]=='employee')
            {
                navigate("/Employee");
            }
            
    });
}

    return (
        <div className="container">
                <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>User ID</label>
                    <input type="text" name="username" className="form-control" placeholder="Enter Username" onChange={(ev)=>setUsername(ev.target.value) } />
                </div><br/>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={(ev)=>setPassword(ev.target.value) }/>
                </div><br/>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" onClick={(ev)=>submitForm(ev)}>Submit</button>
                </div>
                <br/><br/>
            </form>
            
            </div>
    );
}

export default Login;