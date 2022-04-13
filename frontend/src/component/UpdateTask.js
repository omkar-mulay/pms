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


function UpdateTask(){

    let navigate = useNavigate();
    const[task_name, setTaskname] = useState("");
    const[start_date, setStartdate] = useState("");
    const[end_date, setEnddate] = useState("");
    const[description, setDescription] = useState("");
    const[priority, setPriority] = useState("");
    const[teammember_id,setTeammemberid ] = useState("");
    
    const search = useLocation().search;

    const taskid = new URLSearchParams(search).get('taskid');
    //console.log(projectid);
    const fetchData = () => {
        console.log(taskid);
        
        fetch("http://localhost:8080/view_task_by_taskid?taskid="+taskid)
          .then(response => {
            return response.json()
             
          })
          .then(data => {
            
            setTaskname(data.task_name)
            setDescription(data.description)
            setPriority(data.priority)
            setTeammemberid(data.teammember_id)
            

            let sdate = new Date(data.start_date).toISOString().split('T')[0]
            //date = data.enddate
            console.log(data);
            console.log(sdate);
           
            setStartdate(sdate?sdate:"")
            //console.log(projects.projectname);
            //setEnddate(data.enddate?data.enddate:"")


            let edate = new Date(data.end_date).toISOString().split('T')[0]
            //date = data.enddate
            console.log(edate);
           
            setEnddate(edate?edate:"")
            //console.log(projects.projectname);
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
        let url="http://localhost:8080/update_task?task_name="+task_name+"&&start_date="+start_date+"&&end_date="+end_date+"&&description="+description+"&&priority="+priority+"&&teammember_id="+teammember_id+"&&taskid="+taskid;
        //alert(url);
        fetch(url)
        .then(resp =>{
            if(resp.status===200){
                alert("Task updated successfully!");
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
      

<form>
          <div style={{ width: '23rem' }}>
                <h4>Update Task</h4>
                    <MDBInput label='Enter Task name' name="taskname" value={task_name} type='text' size='lg' onChange={(ev)=>setTaskname(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Start date' name="startdate" value={start_date} type='date' size='lg' onChange={(ev)=>setStartdate(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter End date' name="enddate" value={end_date} type='date' size='lg' onChange={(ev)=>setEnddate(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter description' name="description" value={description} type='text' size='lg' onChange={(ev)=>setDescription(ev.target.value) }/>
                    <br />

                    <MDBInput label='Enter Priority' name="priority"  value={priority} type='text' size='lg' onChange={(ev)=>setPriority(ev.target.value) }/>
                    <br />


                    <MDBInput label='Enter teammember id' name="teammemberid" value={teammember_id} type='text' size='lg' onChange={(ev)=>setTeammemberid(ev.target.value) }/>
                    <br />

                    <MDBBtn type="submit" onClick={(ev)=>submitForm(ev)}>Update</MDBBtn>
         </div>    

        </form>


        </div>
    );
}

export default UpdateTask;