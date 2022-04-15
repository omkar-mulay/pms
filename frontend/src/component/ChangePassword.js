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

function ChangePassword(){
    let navigate = useNavigate();
    const[newpassword, setnewpassword] = useState("");
    const[confirmpassword, setconfirmpassword] = useState("");
    const[username, setusername] = useState("");
    
    

    const submitForm=(ev)=>{
        ev.preventDefault();

        let url="http://localhost:8080/update_password?password="+newpassword+"&&username="+username;
        if(confirmpassword===newpassword)
        {
         fetch(url)
          .then(resp =>{
            if(resp.status===200){
                alert("Password updated successfully!");
               navigate("/Login");
            }
        
        })
        }
        else
            alert("Password does not match");
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
                    
                </div>
                </MDBContainer>
            </MDBNavbar>
        </header><br/>
      

        <form>
        <div className="container" style={{width: '40%', height:'50%', marginTop: '8%', marginLeft: '25', marginRight: '25%'}}>
          <div style={{ width: '23rem' }}>
                <h4>Change Password</h4>
                    <MDBInput label='Enter New Password' name="newpassword" type='password' size='lg' onChange={(ev)=>setnewpassword(ev.target.value) }/>
                    <br />

                    <MDBInput label='Confirm Password' name="confirmpassword" type='password' size='lg' onChange={(ev)=>setconfirmpassword(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Username' name="username" type='text' size='lg' onChange={(ev)=>setusername(ev.target.value) }/>
                    <br />

                    <MDBBtn type="submit" onClick={(ev)=>submitForm(ev)}>change Password</MDBBtn>
         </div>    
         </div>
        </form>

        </div>
      
      
    ); 
}
    
export default ChangePassword;