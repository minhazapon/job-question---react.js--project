import { Link, NavLink } from "react-router-dom";




const Nav = () => {

     const links = <>
     
         <li><NavLink to="/"  >Html</NavLink></li>
         <li><NavLink to="/css"  >Css</NavLink></li>
         <li><NavLink to="/js">javaScript</NavLink></li>
         <li><NavLink to="/react"  >ReactJs</NavLink></li>
         <li><NavLink to="/DB"  >MongoDB</NavLink></li>
     
     
     
     </>



    return (
        <div>
            <div>
            <div className="navbar bg-base-100">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     {links}
                  </ul>
                </div>
                
                <div className=" flex items-center gap-1">
                <img className=" h-[60px]" src="https://i.ibb.co/YhdqHN2/question.png" alt="" />
                <a className=" text-3xl font-bold text-[#6420AA]  ">APON<span className=" text-[#5DEBD7] ">iQ</span></a>
                </div>

              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                 {links}
                </ul>
              </div>
              <div className="navbar-end">
                <Link to="/card">
                <a className="btn bg-[#30bdaa] text-white">Bangla Version</a>
                </Link>

              </div>
            </div>
            </div>
            
        </div>
    );
};

export default Nav;