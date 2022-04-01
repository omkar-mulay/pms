import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import mystore from './store';

function Registration(){

    let navigate = useNavigate();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[fname, setFname] = useState("");
    const[lname, setLname] = useState("");
    const[email, setEmail] = useState("");
    const[contactno, setContactno] = useState("");
    const[role, setRole] = useState("");

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
                fname: fname,
                lname: lname,
                email: email,
                contactno: contactno,
                role: role
            })
        }
        console.log(role);
        if(role==="employee"|| role==="manager"){
            fetch("http://localhost:8080/reg_emp",reqOptions)
            .then(resp=> {
                if(resp.status===200){
                    alert("User registration successful!");
                    navigate("/login");
                }
                else{
                    alert("User registration unsuccessful!");
                    navigate("/Registration");
                }
            }
            );

        }
        else if(role==="client"){
            fetch("http://localhost:8080/reg_client",reqOptions)
            .then(resp=> {
                if(resp.status===200){
                    alert("User registration successful!");
                    navigate("/login");
                }
                else{
                    alert("User registration unsuccessful!");
                    navigate("/Registration");
                }
            });
            
        }
        


    }
    return(
        <div className="container">
                <form>
                <h3>Registration</h3>
                <div className="form-group">
                    <label>Enter Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Enter Username" onChange={(ev)=>setUsername(ev.target.value) } />
                </div><br/>
                <div className="form-group">
                    <label>Enter Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={(ev)=>setPassword(ev.target.value) }/>
                </div><br/>
                <div className="form-group">
                    <label>Enter First name</label>
                    <input type="text" name="fname" className="form-control" placeholder="Enter firstname" onChange={(ev)=>setFname(ev.target.value) } />
                </div><br/>

                <div className="form-group">
                    <label>Enter Last name</label>
                    <input type="text" name="lname" className="form-control" placeholder="Enter lastname" onChange={(ev)=>setLname(ev.target.value) } />
                </div><br/>

                <div className="form-group">
                    <label>Enter email</label>
                    <input type="text" name="email" className="form-control" placeholder="Enter email" onChange={(ev)=>setEmail(ev.target.value) } />
                </div><br/>

                <div className="form-group">
                    <label>Enter Contact no</label>
                    <input type="text" name="contactno" className="form-control" placeholder="Enter contact no" onChange={(ev)=>setContactno(ev.target.value) } />
                </div><br/>

                <div className="form-group">
                    <label>Enter Role</label>
                    <select name="role" id="role" className="form-control" onChange={(ev)=>setRole(ev.target.value)}>
                        <option value="">--Please choose an option--</option>
                        <option value="employee">Employee</option>
                        <option value="manager">Manager</option>
                        <option value="client">Client</option>
                    </select>                
                </div><br/>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" onClick={(ev)=>submitForm(ev)}>Submit</button>
                </div>
                <br/><br/>
            </form>
            
            </div>
    );
}

export default Registration;