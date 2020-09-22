import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/_router-dashboard.scss';
import inarixLogo from '../images/inarix-logo-h@3x.png'
const UserDashboard = () => {


    const RouterDashboard = () => (
        <>
        


            <div className='__links-dashboard'>
                <div className='__button-1 __user-dashboard'>
                    <Link to='/user/private'  style={{textDecoration:'none', color:'#232527'}} >User Dashboard</Link>
                </div>
                <div className='__button-1'>
                    <Link to='/admin/dashboard'  style={{textDecoration:'none', color:'#232527'}} >Admin Dashboard</Link>
                </div>
            </div>
        </>
    )

    return(
        <>
        <div className='__info-routerDashboard'>
            
            <h1 className='mt-5 mb-5 text-center'>Welcome to Dashboard User and Admin</h1>
            <div className='image-logo'>
                <img src={inarixLogo} alt='inari-logo'/>
            </div>
            <h3 className='text-center'>Here you will see two differents Dashboard as an User and as an Admin</h3>
            <h4 className='mb-5 text-center'>To see the differents function beetween each other</h4>
                
                {RouterDashboard()}

        </div>
        </>
    )
}


export default UserDashboard