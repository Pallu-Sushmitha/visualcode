import { Outlet, Link } from "react-router-dom";



const Layout = () => {

 return (

  <>

   <nav>

    <ul>

     <li>

      <Link to="/student">Student Registration</Link>

     </li>

     <li>

      <Link to="/assess">Assessment Details</Link>

     </li>

     <li>

      <Link to="/assessresult">Assessment Result</Link>

     </li>
     

    </ul>

   </nav>

   <Outlet />

  </>

 )

};

export default Layout;