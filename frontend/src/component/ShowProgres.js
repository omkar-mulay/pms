import {VictoryPie} from 'victory';
import React from 'react';
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function ShowProgress(){

    const [tasks, setTasks] = useState([])
    const search = useLocation().search;

    //const [pie1, setPie1] = useState([]);
    //const [pie2, setPie2] = useState([]);
    //const [pie3, setPie3] = useState([]);

    let pie1 = "";
    let pie2 = "";
    let pie3 = "";
    const projectid = new URLSearchParams(search).get('projectid');

    ChartJS.register(ArcElement, Tooltip, Legend);
    var var1;
    var var2;
    var var3;
    //let sampleData;

    const fetchData = () => {
        fetch("http://localhost:8080/view_status_count?projectid="+projectid)
          .then(response => {
            return response.json()
          })
          .then(data => {
            setTasks(data)
            console.log(data)
            console.log(data[0])
            pie1 = new String(data[0]).split(',');
            //setPie1(data[0]).split(',');
            pie2 = new String(data[1]).split(',');
            pie3 = new String(data[2]).split(',');
            //let count = str.split(',');
            var1 = parseInt(pie1[0], 10);
            var2 = parseInt(pie2[0], 10);
            var3 = parseInt(pie3[0], 10);
            console.log(var1);
            console.log(var2);            
            console.log(var3);
            console.log(typeof(var1));
          })
    }
    const fetchProjectStatus = () => {
      fetch("http://localhost:8080/view_task_by_project?projectid="+projectid)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setTasks(data)
          console.log(data)
        })
    }
    useEffect(() => {
        fetchData();
        fetchProjectStatus()
      }, [])

    const sampleData = [
        {x:"Complete", y: var1},
        {x:"In Progress", y: var2},
        {x:"To do", y: var3}
    ];

    const data = {
        labels: ['Complete', 'In Progress', 'To do'],
        datasets: [
          {
            label: '# of Votes',
            data: [var1, var2, var3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

return(
    <div className="container" style={{height:600, width: 600}}>
      List of Tasks:
        <table className="table table-bordered table-hover" style={{border: 'solid'}}>
            <thead>
                <tr>
                <th>Task id</th>
                <th>Task name</th>
                <th>Task status</th>
                </tr>
            </thead>
            <tbody>
                    {
                        tasks.map((task)=>{
                            return(
                                
                                <tr key={task.taskid}> 
                                   <td>{task.taskid}</td>
                                   <td>{task.task_name}</td> 
                                   <td>{task.status}</td> 
                                </tr>
                                ) 
                            })
                    }
            </tbody>
        </table>
        {/* <VictoryPie
            colorScale={["cyan", "orange", "navy" ]}
            data={[
                {x:"Complete", y: var1},
                {x:"In Progress", y: var2},
                {x:"To do", y: var3}
            ]}
            
        /> */}
        {/* <Pie data={data} /> */}


    </div>
);    
}

export default ShowProgress;