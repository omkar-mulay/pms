import { Link } from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon
  } from 'mdb-react-ui-kit';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Admin() {
    const [projects, setProjects] = useState([])

    let navigate = useNavigate();
    
    const fetchData = () => {
        fetch("http://localhost:8080/show_all_projects")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setProjects(data)
          })
    }
    useEffect(() => {
        fetchData()
      }, [])

    function delProj(projectid, projectname){
        if(window.confirm("Are you sure you want to delete project: "+projectname))
        {
            fetch("http://localhost:8080/delete_project?projectid="+projectid)
            .then(response => {
                if(response.status===200){
                    alert("Project deleted successfully!");
                    window.location.reload();
                }
            })
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
                                   <td><Button className="btn btn-danger" onClick={()=> delProj(projects.projectid, projects.projectname)}>Delete</Button></td>
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