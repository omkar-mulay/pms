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
import { useEffect} from "react";
import { Link, useLocation } from "react-router-dom";

function InsertTask(){
    const [emp, setEmp] = useState([])

    let navigate = useNavigate();
    const[task_name, setTaskname] = useState("");
    const[start_date, setStartdate] = useState("");
    const[end_date, setEnddate] = useState("");
    //const[projectid, setProjectid] = useState("");
    const[status, setStatus] = useState("");
    const[description, setDescription] = useState("");
    const[priority, setPriority] = useState("");
    const[teammember_id, setTeammemberid] = useState("");

    const search = useLocation().search;

    const projectid = new URLSearchParams(search).get('projectid');

    const submitForm=(ev)=>{
        ev.preventDefault();

        let url="http://localhost:8080/insert_task?task_name="+task_name+"&&start_date="+start_date+"&&end_date="+end_date+"&&projectid="+projectid+"&&status="+status+"&&description="+description+"&&priority="+priority+"&&teammember_id="+teammember_id;
        //alert(url);
        fetch(url)
        .then(resp =>{
            if(resp.status===200){
                alert("New Task inserted!");
                navigate("/Manager");
            }
    })
 }
 const fetchData = () => {
    fetch("http://localhost:8080/view_all_emp")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setEmp(data)
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
                        <MDBNavbarLink aria-current='page' href='/Manager'>
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
        List of employees:
        <table className="table table-bordered table-hover" style={{border: 'solid'}}>
            <thead>
                <tr>
                <th>Employee id</th>
                <th>Employee first name</th>
                <th>Employee last name</th>
                </tr>
            </thead>
            <tbody>
                    {
                        emp.map((emp)=>{
                            return(
                                
                                <tr key={emp.empid}> 
                                   <td>{emp.empid}</td>
                                   <td>{emp.fname}</td> 
                                   <td>{emp.lname}</td> 
                                </tr>
                                ) 
                            })
                    }
            </tbody>
        </table>

        <form>
        <div className="container" style={{width: '40%', height:'50%', marginTop: '8%', marginLeft: '25', marginRight: '25%'}}>
          <div style={{ width: '23rem' }}>
                <h4>Create Task</h4>
                    <MDBInput label='Enter Task name' name="taskname" type='text' size='lg' onChange={(ev)=>setTaskname(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Start date' name="startdate" type='date' size='lg' onChange={(ev)=>setStartdate(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter End date' name="enddate" type='date' size='lg' onChange={(ev)=>setEnddate(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter project id' name="projectid" value={projectid} type='disable' size='lg' />
                    <br />

                    <select name="status" id="status" className="form-control" onChange={(ev)=>setStatus(ev.target.value) }>    
                        <option value="">Choose status </option>
                        <option value="To do">To do</option>
                        <option value="In Progress">In progress</option>
                        
                    </select>
                    <br/>

                    <MDBInput label='Enter description' name="description" type='text' size='lg' onChange={(ev)=>setDescription(ev.target.value) }/>
                    <br />

                    <select name="priority" id="priority" className="form-control" onChange={(ev)=>setPriority(ev.target.value) }>    
                        <option value="">Choose priority </option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <br/>


                    <MDBInput label='Enter teammember id' name="teammemberid" type='text' size='lg' onChange={(ev)=>setTeammemberid(ev.target.value) }/>
                    <br />

                    <MDBBtn type="submit" onClick={(ev)=>submitForm(ev)}>Insert</MDBBtn>
         </div>    
        </div>
        </form>

        </div>
      
      
    ); 
}
    
export default InsertTask;