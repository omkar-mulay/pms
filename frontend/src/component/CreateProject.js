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
  
function CreateProject(){

    let navigate = useNavigate();
    const[managerid, setManagerId] = useState("");
    const[projectname, setProjectname] = useState("");
    const[project_desc, setProjectdesc] = useState("");
    const[startdate, setStartdate] = useState("");
    const[enddate, setEnddate] = useState("");
    const[clientid, setClientid] = useState("");
    
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
                clientid: clientid
            })
        }
        console.log(project_desc);
        fetch("http://localhost:8080/add_project", reqOptions)
        .then(resp =>{
            //console.log(resp);
            if(resp.status===200){
                //console.log("Reached here");
                alert("Project added successfully!");
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
                {/* <h3>Create Project</h3>
                <div className="form-group">
                    <label>Enter Manager id:</label>
                    <input type="text" name="managerid" className="form-control" placeholder="Enter Manager id" onChange={(ev)=>setManagerId(ev.target.value) } />
                </div><br/>
                <div className="form-group">
                    <label>Enter Project name:</label>
                    <input type="text" name="projectname" className="form-control" placeholder="Enter Project name" onChange={(ev)=>setProjectname(ev.target.value) }/>
                </div><br/>

                <div className="form-group">
                    <label>Enter Project desc:</label>
                    <input type="text" name="project_desc" className="form-control" placeholder="Enter Project desccription" onChange={(ev)=>setProjectdesc(ev.target.value) }/>
                </div><br/>

                <div className="form-group">
                    <label>Enter start date:</label>
                    <input type="date" name="startdate" className="form-control" placeholder="Enter start date" onChange={(ev)=>setStartdate(ev.target.value) }/>
                </div><br/>

                <div className="form-group">
                    <label>Enter end date:</label>
                    <input type="date" name="enddate" className="form-control" placeholder="Enter end date" onChange={(ev)=>setEnddate(ev.target.value) }/>
                </div><br/>

                <div className="form-group">
                    <label>Enter Client id:</label>
                    <input type="text" name="clientid" className="form-control" placeholder="Enter Client id" onChange={(ev)=>setClientid(ev.target.value) }/>
                </div><br/>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" onClick={(ev)=>submitForm(ev)}>Submit</button>
                </div>
                <br/><br/> */}

                <div style={{ width: '23rem' }}>
                <h4>Create Project</h4>
                    <MDBInput label='Enter manager id' name="managerid" type='text' size='lg' onChange={(ev)=>setManagerId(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Project name' name="projectname" type='text' size='lg' onChange={(ev)=>setProjectname(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Project desc' name="projectdesc" type='text' size='lg' onChange={(ev)=>setProjectdesc(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Start date' name="startdate" type='date' size='lg' onChange={(ev)=>setStartdate(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter End date' name="enddate" type='date' size='lg' onChange={(ev)=>setEnddate(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Client id' name="clientid" type='text' size='lg' onChange={(ev)=>setClientid(ev.target.value) }/>
                    <br />

                    <MDBBtn type="submit" onClick={(ev)=>submitForm(ev)}>Create</MDBBtn>
                </div>    

            </form>
        </div>
    );
}

export default CreateProject;