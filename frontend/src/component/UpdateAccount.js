import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon
  } from 'mdb-react-ui-kit';

function UpdateAccount(){
    let navigate = useNavigate();
    const[fname, setfname] = useState("");
    const[lname, setlname] = useState("");
    const[email, setemail] = useState("");
    const[contactno, setcontactno] = useState("");
    const[empid, setempid] = useState("");
    

    const submitForm=(ev)=>{
        ev.preventDefault();

        const reqOptions = {
            method: 'GET',
            headers :{
                'Content-Type':'application/text'
            }
        }
        let url="http://localhost:8080/update_employee_account?fname="+fname+"&&lname="+lname+"&&email="+email+"&&contactno="+contactno+"&&empid="+empid;
        fetch(url)
        .then(resp =>{
            if(resp.status===200){
                alert("Account information updated successfully!");
                navigate("/Admin");
            }
    })
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
                        <MDBNavbarLink href='#'>Change Password</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='/CreateProject'>Create Project</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='#'>Settings</MDBNavbarLink>
                    </MDBNavbarItem>
                    </MDBNavbarNav>
                </div>
                </MDBContainer>
            </MDBNavbar>
        </header><br/>
      

        <form>
          <div style={{ width: '23rem' }}>
                <h4>Update Account Information</h4>
                    <MDBInput label='Enter First Name' name="fname" type='text' size='lg' onChange={(ev)=>setfname(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Last Name' name="lname" type='text' size='lg' onChange={(ev)=>setlname(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Email' name="email" type='email' size='lg' onChange={(ev)=>setemail(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Contact No' name="contactno" type='text' size='lg' onChange={(ev)=>setcontactno(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Employee Id' name="empid" type='text' size='lg' onChange={(ev)=>setempid(ev.target.value) }/>
                    <br />

                    

                    <MDBBtn type="submit" onClick={(ev)=>submitForm(ev)}>Update</MDBBtn>
         </div>    

        </form>

        </div>
      
      
    ); 
}
    
export default UpdateAccount;