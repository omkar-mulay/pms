import { Link } from "react-router-dom";

function LandinPage(){
    return(
        <div className="container" style={{ 
            backgroundImage: "url('image1.jpg')" 
          }}>
            
            <Link className="btn btn-info" to="/login">Login</Link> <br/>
        </div>
    );
}

export default LandinPage;