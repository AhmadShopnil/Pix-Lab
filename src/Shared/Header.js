import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider/Authprovider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        localStorage.removeItem('pixLabToken')
    }

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>

        {
            user?.uid ?
                <div className='flex'>
                    <li><Link to='/myreviews'>My Reviews</Link></li>
                    <li><Link to='/addservices'>Add Services</Link></li>
                    <button onClick={handleLogOut} className="btn  btn-ghost  mx-1"><Link to="/login">Sign Out</Link></button>

                </div>
                :
                <>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/signup'>Sign Up</Link></li>
                </>
        }

    </>

    return (

        <div>
            <div className="navbar bg-base-100">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box grid grid-cols- gap-2 h-auto w-96">
                            {menuItem}

                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Pix Lab</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <p>{user?.displayName}</p>

                </div>
            </div>
            <div className="divider"></div>
        </div>



    );
};

export default Header;