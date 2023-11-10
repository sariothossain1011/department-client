import { Link } from "react-router-dom";
import "./error.css";
const NotFoundPage = () => {
  return (
    <>
   
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>
          <p>
            Sorry! This is not Your Distination. So, For Your Kind information
            You Can Redirect Home Page
          </p>

          <Link to="/">Go to Home</Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
