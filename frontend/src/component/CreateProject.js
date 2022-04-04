import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'

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
            if(resp===200){
                alert("Project added successfully!");
                navigate("/Admin");
            }
        })
    }

    return(
        <div className="container">
            <form>
                <h3>Create Project</h3>
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
                <br/><br/>
            </form>
        </div>
    );
}

export default CreateProject;