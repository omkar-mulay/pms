import { Link } from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UpdateProject from "./UpdateProject";

function Admin() {
    const [projects, setProjects] = useState([])

    let navigate = useNavigate();
    const[managerid, setManagerId] = useState("");
    const[projectname, setProjectname] = useState("");
    const[project_desc, setProjectdesc] = useState("");
    const[startdate, setStartdate] = useState("");
    const[enddate, setEnddate] = useState("");
    const[clientid, setClientid] = useState("");

    const fetchData = () => {
        fetch("http://localhost:8080/show_all_projects")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setProjects(data)
            console.log(data)
          })
    }
    useEffect(() => {
        fetchData()
      }, [])

    //   const updateProject=(ev)=>{
    //     ev.preventDefault();

    //     console.log(projectid);
    //     const reqOptions = {
    //         method: 'GET',
    //         headers :{
    //             'Content-Type':'application/json'
    //         },
    //         body: JSON.stringify({
    //             managerid: managerid,
    //             projectname: projectname,
    //             project_desc: project_desc,
    //             enddate: enddate
    //         })
    //     }
    // }

    return(
        
        // <div className="container">
        //     <h1>Welcome Admin</h1>
        //     <Link to="/Registration">Registration</Link> <br/>
        //     <Link to="/CreateProject">Create Project</Link> <br/>
        // </div>
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
        </header>
        <br/>
        <h4 style={{textAlign: 'left'}}>All Projects</h4>
        <br/>
        <table className="table table-bordered table-hover" style={{border: 'solid'}}>
            <thead>
                <tr>
                <th>Manager id</th>
                <th>Project name</th>
                <th>Project Description</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Client id</th>
                </tr>
            </thead>
            <tbody>
                    {
                        projects.map((projects)=>{
                            return(
                                <tr key={projects.projectid}> 
                                   <td>{projects.managerid}</td> 
                                   <td><a href={`/ProjectDetails?projectid=${projects.projectid}`}>{projects.projectname}</a></td> 
                                   <td>{projects.project_desc}</td> 
                                   <td>{projects.startdate}</td>
                                   <td>{projects.enddate}</td>
                                   <td>{projects.clientid}</td>
                                   <td><Link className="btn btn-info" to={`/UpdateProject?projectid=${projects.projectid}`} >Update</Link></td>
                                   <td><Link className="btn btn-danger" to={`/UpdateProject?projectid=${projects.projectid}`}>Delete</Link></td>
                                </tr>
                                ) 
                            })
                    }
            </tbody>
        </table>
        
        </div>
        
    );
    
}
export default Admin;