import React from 'react';
import {Link} from 'react-router-dom';
import {isAuth } from '../helpers/Helpers';
import Sidebar from './SideBar';
import '../styles/components/_adminDash.scss';
import inarixLogo from '../images/inarix-logo-h@3x.png';
import {bounce}  from "react-animations";
import styled, {keyframes} from 'styled-components';
import inarixlogom from '../images/inarix-epi-jaune.png';


const AdminDashboard = () => {

    const Bounce = styled.div`animation: 4s ${keyframes`${bounce}`} infinite`;

    const LoadProfileInfo = () => (
        <>
            <div>
                <div className='__inarix-logo_Dash text-center'>
                    <img src={inarixLogo} alt='inarix-logo'/>
                </div>
                <div className='text-center __text-inarix'>
                    <p>What do you need to search?</p>
                <Bounce>
                        <div className='inarix-logoSm'>
                            <img src={inarixlogom} alt='inarix'/>
                        </div>
                </Bounce>
                </div>
            </div>
            
        </>
    )


    return(
        <>
        
            {/* <h1 className='mt-5 mb-5'>{isAuth().email} Dashboard</h1> */}
            <div className='__admin-dashboard-flex' >
                <div>
                    <Sidebar/>
                </div>
                <div className='__info-tables'>
                    {LoadProfileInfo()}
                    
                </div>
                {/* {JSON.stringify(samples)} */}
                
        </div>
        </>
    )
}


export default AdminDashboard