import React, { useState,useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
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


function UpdateStatus(){

    let navigate = useNavigate();
    
    const search = useLocation().search;

    const taskid = new URLSearchParams(search).get('taskid');
    const [status, setStatus] = useState("")
    //console.log(projectid);
    const fetchData = () => {
        console.log(taskid);
        
        fetch("http://localhost:8080/view_task_by_taskid?taskid="+taskid)
          .then(response => {
            return response.json()
             
          })
       
    }

    useEffect(() => {
        fetchData()
    }, [])

    const submitForm=(ev)=>{
        ev.preventDefault();

        const reqOptions = {
            method: 'GET',
            headers :{
                'Content-Type':'application/text'
            }
        }
        //console.log(project_desc);
        let url="http://localhost:8080/update_task_by_employee?status="+status+"&&taskid="+taskid;
        //alert(url);
        fetch(url)
        .then(resp =>{
            if(resp.status===200){
                alert("Task status updated successfully!");
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
                        <MDBNavbarLink aria-current='page' href='/Employee'>
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
        </header><br/>
      

<form>
          <div style={{ width: '23rem' }}>
                <h4>Update Task</h4>
                <select name="update_status" id="update_status" className="form-control" onChange={(ev)=>setStatus(ev.target.value) }>    
                        <option value="">Choose status </option>
                        <option value="To do">To do</option>
                        <option value="In Progress">In progress</option>
                        <option value="Complete">Complete</option>
                </select>
                <br/>
                <MDBBtn type="submit" onClick={(ev)=>submitForm(ev)}>Update Status</MDBBtn>
         </div>    

        </form>


        </div>
    );
}

export default UpdateStatus;