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


function AddProject(){

    let navigate = useNavigate();
    const[managerid, setmanagerid] = useState("");
    const[projectname, setprojectname] = useState("");
    const[project_desc, setproject_desc] = useState("");
    const[startdate, sestartdate] = useState("");
    const[enddate, setenddate] = useState("");
    const[clientid, setclientid] = useState("");
    

    const submitForm=(ev)=>{
        ev.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers :{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                managerid: managerid,
                projectname: projectname,
                project_desc: project_desc,
                startdate: startdate,
                enddate: enddate,
                clientid: clientid,
               
            })
        }
        
            fetch("http://localhost:8080/add_project",reqOptions)
            .then(resp=> {
                if(resp.status===200){
                    alert("Project added successfully");
                    navigate("/Admin");
                }
                
            }
            );

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
                 <h4>Add New Project</h4>
                     <MDBInput label='Enter Managerid' name="managerid" type='text' size='lg' onChange={(ev)=>setmanagerid(ev.target.value) }/>
                     <br />
 
                     <MDBInput label='Enter Project Name' name="projectname" type='text' size='lg' onChange={(ev)=>setprojectname(ev.target.value) }/>
                     <br />
 
                     <MDBInput label='Enter Project Description' name="project_desc" type='text' size='lg' onChange={(ev)=>setproject_desc(ev.target.value) }/>
                     <br />

                     <MDBInput label='Enter Start Date' name="startdate" type='date' size='lg' onChange={(ev)=>sestartdate(ev.target.value) }/>
                     <br />

                     <MDBInput label='Enter End Date' name="enddtae" type='date' size='lg' onChange={(ev)=>setenddate(ev.target.value) }/>
                     <br />

                     <MDBInput label='Enter Clientid' name="clientid" type='text' size='lg' onChange={(ev)=>setclientid(ev.target.value) }/>
                     <br />
 
                     <MDBBtn type="submit" onClick={(ev)=>submitForm(ev)}>Add Project</MDBBtn>
          </div>    
 
         </form>
 
         </div>
       
       
     ); 
 
    }
export default AddProject;