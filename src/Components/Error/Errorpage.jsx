import { Link } from "react-router-dom";


const Errorpage = () => {
          return (
          <div>
           <h1>Oopss.......</h1>
           <button className="btn"><Link to = "/">go back home</Link></button>         
          </div>
          );
};

export default Errorpage;