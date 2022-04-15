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
import moment from 'moment-timezone';


function Client() {

    const [projects, setProjects] = useState([])
    
    let navigate = useNavigate();

    const save = JSON.parse(localStorage.getItem("loggedinuser"));
    console.log(save[1]);

    const formatDate = (date) => {
        return moment(date).utc().tz('Asia/Kolkata').format('DD-MM-YYYY')
    }

    const fetchData = () => {
        fetch("http://localhost:8080/search_by_clientid?clientid="+save[1])
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
                        <MDBNavbarLink aria-current='page' href='/Client'>
                        Home
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink href='/ChangePassword'>Change Password</MDBNavbarLink>
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
                                   <td>{projects.projectname}</td> 
                                   <td>{projects.project_desc}</td> 
                                   <td>{formatDate(new Date(projects.startdate))}</td>
                                   <td>{formatDate(new Date(projects.enddate))}</td>
                                   <td>{projects.clientid}</td>
                                   <td><Link className="btn btn-info" to={`/ShowProgress?projectid=${projects.projectid}`} >View Progress</Link></td>
                                </tr>
                                ) 
                            })
                    }
            </tbody>
        </table>
        
        </div>
    );
    
}
export default Client;