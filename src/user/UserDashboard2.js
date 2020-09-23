import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {isAuth, getCookie } from '../helpers/Helpers';
import {listSamples} from './apiUser';
import moment from 'moment';
import SideBarUser from './sideBarUser';
import '../styles/components/_adminDash.scss';
import inarixLogo from '../images/inarix-logo-h@3x.png';
import {bounce}  from "react-animations";
import styled, {keyframes} from 'styled-components';
import inarixlogom from '../images/inarix-epi-jaune.png';

const UserDashboard2 = () => {

    
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
        
            <div className='__admin-dashboard-flex' >
                <div>
                    <SideBarUser/>
                </div>
                <div className='__info-tables-samples'>
                    {LoadProfileInfo()}
                    
                </div>
                
        </div>
        </>
    )
    

}


export default UserDashboard2