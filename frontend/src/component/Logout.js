import { useState } from 'react';

import {MDBInput,MDBBtn} from 'mdb-react-ui-kit';
import mystore from './store';
import { useNavigate } from 'react-router-dom';



 function Logout(){
  let navigate = useNavigate();
  let logout;
        logout = () => {
            
            window.localStorage.removeItem("loggedinuser");
            alert("Logged out Successfully");
            navigate("/Login");
            
        }
        
            
        
            return(
             <div>
               <br/>
               <p>Confirm to Logout</p>
               <br/>
               <MDBBtn type="submit" onClick={logout}>Logout</MDBBtn>
             </div>

            );
        
  


   


            }
 
export default Logout;
 
 
            
