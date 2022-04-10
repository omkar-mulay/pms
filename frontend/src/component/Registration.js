import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import mystore from './store';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBBtn
  } from 'mdb-react-ui-kit';

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
                    navigate("/Admin");
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
                    navigate("/Admin");
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
         
         <header>
             <MDBNavbar expand='lg' light bgColor='white' fixed>
                 <MDBContainer fluid>
                 <MDBNavbarToggler
                     aria-controls='navbarExample01'
                     aria-expanded='false'
                     aria-label='Toggle navigation'
                 >
                     <MDBIcon fas icon='bars' />
                 </MDBNavbarToggler>
                 <div className='collapse navbar-collapse' id='navbarExample01'>
                     <MDBNavbarNav right className='mb-2 mb-lg-0'>
                     <MDBNavbarItem active>
                         <MDBNavbarLink aria-current='page' href='/Admin'>
                         Home
                         </MDBNavbarLink>
                     </MDBNavbarItem>
                     <MDBNavbarItem>
                         <MDBNavbarLink href='/Registration'>Add User</MDBNavbarLink>
                     </MDBNavbarItem>
                     <MDBNavbarItem>
                         <MDBNavbarLink href='/ChangePassword'>Change Password</MDBNavbarLink>
                     </MDBNavbarItem>
                     <MDBNavbarItem>
                         <MDBNavbarLink href='/CreateProject'>Create Project</MDBNavbarLink>
                     </MDBNavbarItem>
                     <MDBNavbarItem>
                     <select name="setting" id="setting" className="form-control" onClick={(ev)=>navigate(ev.target.value)}>    
                        <option value="">Settings </option>
                        <option value="../UpdateAccount">Update Account Info </option>
                        <option value="../Logout">Logout</option>
                        </select>
                     </MDBNavbarItem>
                     </MDBNavbarNav>
                 </div>
                 </MDBContainer>
             </MDBNavbar>
         </header><br/>
       
 
         <form>
           <div style={{ width: '23rem' }}>
                 <h4>Add New User</h4>
                     <MDBInput label='Enter Username' name="Username" type='text' size='lg' onChange={(ev)=>setUsername(ev.target.value) }/>
                     <br />
 
                     <MDBInput label='Enter Password' name="Password" type='Password' size='lg' onChange={(ev)=>setPassword(ev.target.value) }/>
                     <br />
 
                     <MDBInput label='Enter First Name' name="Fname" type='text' size='lg' onChange={(ev)=>setFname(ev.target.value) }/>
                     <br />

                     <MDBInput label='Enter Last Name' name="Lastname" type='text' size='lg' onChange={(ev)=>setLname(ev.target.value) }/>
                     <br />

                     <MDBInput label='Enter Email id' name="Email" type='email' size='lg' onChange={(ev)=>setEmail(ev.target.value) }/>
                     <br />

                     <MDBInput label='Enter Contact No' name="Contactno" type='text' size='lg' onChange={(ev)=>setContactno(ev.target.value) }/>
                     <br />
 
                     <select name="role" id="role" className="form-control" onClick={(ev)=>setRole(ev.target.value)}>    
                        <option value="">Choose Role </option>
                        <option value="employee">Employee</option>
                        <option value="manager">Manager</option>
                        <option value="client">Client</option>
                        </select>
                    <br/>
                     <MDBBtn type="submit" onClick={(ev)=>submitForm(ev)}>Add User</MDBBtn>
          </div>    
 
         </form>
 
         </div>
       
       
     ); 
}

export default Registration;