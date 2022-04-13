import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
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

function UpdateProject(){

    let navigate = useNavigate();
    let mgrid = "";
    const[managerid, setManagerId] = useState("");
    const[projectname, setProjectname] = useState("");
    const[project_desc, setProjectdesc] = useState("");
    const[enddate, setEnddate] = useState("");
    const [projects, setProjects] = useState({})

    const search = useLocation().search;

    const projectid = new URLSearchParams(search).get('projectid');
    //console.log(projectid);
    const fetchData = () => {
        console.log(projectid);
        
        fetch("http://localhost:8080/search_by_projectid?projectid="+projectid)
          .then(response => {
            return response.json()
             
          })
          .then(data => {
            // const fields = [managerid, projectname, project_desc, enddate]
            // fields.forEach(field =>setValue(field, data[field]));
            setProjects(data)
            setManagerId(data.managerid)
            setProjectname(data.projectname)
            setProjectdesc(data.project_desc)
            //setEnddate(data.enddate?data.enddate:"")
            let edate = new Date(data.enddate).toISOString().split('T')[0]
            //date = data.enddate
            console.log(edate);
            mgrid = data.managerid;
            setEnddate(edate?edate:"")
            //console.log(projects.projectname);
          })
        //   projects.map((data)=>{
        //     return(
        //         console.log(data.managerid)
        //     )})
    }

    useEffect(() => {
        fetchData()
        //console.log(projects.projectid);
        // .then((response) =>{
        //     setManagerId(response.data.managerid)
        //     setProjectname(response.data.projectname)
        //     setProjectdesc(response.data.project_desc)
        //     setEnddate(response.data.enddate)
        // }).catch(error => {
        //     console.log(error)
        // })
    }, [])

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
                enddate: enddate
            })
        }
        //console.log(project_desc);
        fetch("http://localhost:8080/update_project?managerid="+managerid+"&&projectname="+projectname+"&&project_desc="+project_desc+"&&enddate="+enddate+"&&projectid="+projectid)
        .then(resp =>{
            if(resp.status===200){
                alert("Project updated successfully!");
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
                <h4>Update Project</h4>
                
                    <MDBInput label='Enter manager id' name="managerid" value={managerid} type='text' size='lg' onChange={(ev)=>setManagerId(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Project name' name="projectname" value={projectname} type='text' size='lg' onChange={(ev)=>setProjectname(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Project desc' name="projectdesc" value={project_desc} type='text' size='lg' onChange={(ev)=>setProjectdesc(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter End date' name="enddate" value={enddate} type='date' size='lg' onChange={(ev)=>setEnddate(ev.target.value) }/>
                    <br />

                    <MDBBtn type="submit" onClick={(ev)=>submitForm(ev)}>Update</MDBBtn>
                    
                </div>    
            </form>
        </div>
    );
}

export default UpdateProject;