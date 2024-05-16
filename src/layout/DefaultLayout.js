import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';


const DefaultLayout = () => {
  return (
    <div>
      {/* <AppSidebar /> */}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <div className='px-3 py-3'>
          <Breadcrumb />
        </div>
        <hr />
        <div className='py-8'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
