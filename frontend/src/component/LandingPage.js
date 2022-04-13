import { Link } from "react-router-dom";

function LandinPage(){
    return(
        <div className="container">
            <h2>Project Management System</h2><br/>
            <Link to="/login">Login</Link> <br/>
        </div>
    );
}

export default LandinPage;