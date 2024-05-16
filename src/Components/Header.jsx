import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
    const { pathname } = useLocation()
    const logoutHandler = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')

    }

    return (
        <div className='flex items-center justify-between p-2 bg-slate-900'>
            <div className="flex gap-4 px-4 text-white">
                <span className="hover:text-slate-500">
                    <NavLink to='/' className={pathname === '/' ? "text-slate-500" : ""}>
                        Home
                    </NavLink>
                </span>
                <span className="hover:text-slate-500">
                    <NavLink to='/shipping' className={pathname === '/shipping' ? "text-slate-500" : ""} >
                        Shipping
                    </NavLink>
                </span>
                <span className="hover:text-slate-500">
                    <NavLink to='/shipping/create' className={pathname === '/shipping/create' ? "text-slate-500" : ""}>
                        Create Shipping
                    </NavLink>
                </span>
                <span className="hover:text-slate-500">
                    <NavLink to='/shipping/create/123' className={pathname === '/shipping/create/123' ? "text-slate-500" : ""}> Shipping with Id
                    </NavLink>
                </span>
                <span className="hover:text-slate-500">
                    <NavLink to='/custom-validation' className={pathname === '/custom-validation' ? "text-slate-500" : ""}>
                        Custom Validation
                    </NavLink>
                </span>
                <span className="hover:text-slate-500">
                    <NavLink to='/generate-password' className={pathname === '/generate-password' ? "text-slate-500" : ""}>
                        Password Generator
                    </NavLink>
                </span>
                <span className="hover:text-slate-500">
                    <NavLink to='/error' className={pathname === '/error' ? "text-slate-500" : ""}>
                        Error
                    </NavLink>
                </span>
            </div>
            <button onClick={logoutHandler} className='bg-slate-800 rounded-md p-2 text-white text-sm'>Logout</button>
        </div>
    )
}

export default Header