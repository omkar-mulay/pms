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

function InsertTask(){
    let navigate = useNavigate();
    const[task_name, setTaskname] = useState("");
    const[start_date, setStartdate] = useState("");
    const[end_date, setEnddate] = useState("");
    const[projectid, setProjectid] = useState("");
    const[status, setStatus] = useState("");
    const[description, setDescription] = useState("");
    const[priority, setPriority] = useState("");
    const[teammember_id, setTeammemberid] = useState("");

    const submitForm=(ev)=>{
        ev.preventDefault();

        let url="http://localhost:8080/insert_task?task_name="+task_name+"&&start_date="+start_date+"&&end_date="+end_date+"&&projectid="+projectid+"&&status="+status+"&&description="+description+"&&priority="+priority+"&&teammember_id="+teammember_id;
        alert(url);
        fetch(url)
        .then(resp =>{
            if(resp.status===200){
                alert("New Task inserted!");
                navigate("/Manager");
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
                <h4>Create Task</h4>
                    <MDBInput label='Enter Task name' name="taskname" type='text' size='lg' onChange={(ev)=>setTaskname(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Start date' name="startdate" type='date' size='lg' onChange={(ev)=>setStartdate(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter End date' name="enddate" type='date' size='lg' onChange={(ev)=>setEnddate(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter project id' name="projectid" type='text' size='lg' onChange={(ev)=>setProjectid(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Status ' name="status" type='text' size='lg' onChange={(ev)=>setStatus(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter description' name="description" type='text' size='lg' onChange={(ev)=>setDescription(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Priority' name="priority" type='text' size='lg' onChange={(ev)=>setPriority(ev.target.value) }/>
                    <br />


                    <MDBInput label='Enter teammember id' name="teammemberid" type='text' size='lg' onChange={(ev)=>setTeammemberid(ev.target.value) }/>
                    <br />

                    <MDBBtn type="submit" onClick={(ev)=>submitForm(ev)}>Insert</MDBBtn>
         </div>    

        </form>

        </div>
      
      
    ); 
}
    
export default InsertTask;