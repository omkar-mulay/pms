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


function UpdateTask(){

    let navigate = useNavigate();
    const[task_name, setTaskname] = useState("");
    const[start_date, setStartdate] = useState("");
    const[end_date, setEnddate] = useState("");
    const[projectid, setProjectid] = useState("");
    const[status, setStatus] = useState("");
    const[description, setDescription] = useState("");
    const[proirity, setPriority] = useState("");
    const[teammember_id,setTeammemberid ] = useState("");


    
    const submitForm=(ev)=>{
        ev.preventDefault();

        const reqOptions = {
            method: 'GET',
            headers :{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                task_name: task_name,
                start_date: start_date,
                end_date: end_date,
                projectid: projectid,
                status: status,
                description: description,
                priority: proirity,
                teammember_id:teammember_id 
            })
        }
        console.log(description);
        fetch("http://localhost:8080/update_task", reqOptions)
        .then(resp =>{
            if(resp===200){
                alert("Task updated successfully!");
                navigate("/Employee");
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
      
{/*             
            <form>
            <div style={{ width: '23rem' }}>
                <h3>Update Task</h3>
                <div className="form-group">
                    <label>Enter Task Name:</label>
                    <input type="text" name="taskname" className="form-control" placeholder="Enter task name" onChange={(ev)=>setTaskname(ev.target.value) } />
                </div><br/>
                <div className="form-group">
                    <label>Enter Start Date:</label>
                    <input type="date" name="start_date" className="form-control" placeholder="Enter start date" onChange={(ev)=>setStartdate(ev.target.value) }/>
                </div><br/>

                <div className="form-group">
                    <label>Enter End Date:</label>
                    <input type="date" name="end_date" className="form-control" placeholder="Enter end Date" onChange={(ev)=>setEnddate(ev.target.value) }/>
                </div><br/>

                <div className="form-group">
                    <label>Enter Project Id:</label>
                    <input type="text" name="projectid" className="form-control" placeholder="Enter project id" onChange={(ev)=>setProjectid(ev.target.value) }/>
                </div><br/>

                <div className="form-group">
                    <label>Enter Status:</label>
                    <input type="text" name="status" className="form-control" placeholder="Enter task status" onChange={(ev)=>setStatus(ev.target.value) }/>
                </div><br/>

                <div className="form-group">
                    <label>Enter Description:</label>
                    <input type="text" name="description" className="form-control" placeholder="Enter descripton" onChange={(ev)=>setDescription(ev.target.value) }/>
                </div><br/>

                <div className="form-group">
                    <label>Enter Priority:</label>
                    <input type="text" name="priority" className="form-control" placeholder="Enter priority" onChange={(ev)=>setPriority(ev.target.value) }/>
                </div><br/>

                <div className="form-group">
                    <label>Enter Teammember_id:</label>
                    <input type="text" name="teammemberid" className="form-control" placeholder="Enter teammember id" onChange={(ev)=>setTeammemberid(ev.target.value) }/>
                </div><br/>

                <div className="form-group">
                <MDBBtn type="submit" onClick={(ev)=>submitForm(ev)}>Insert</MDBBtn>
                </div>
                <br/><br/>
                </div>
            </form> */}

<form>
          <div style={{ width: '23rem' }}>
                <h4>Update Task</h4>
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

export default UpdateTask;