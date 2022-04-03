import { Link } from "react-router-dom";

function Admin() {
    return(
        <div className="container">
            <h1>Welcome Admin</h1>
            <Link to="/Registration">Registration</Link> <br/>
        </div>
        
    );
    
}
export default Admin;