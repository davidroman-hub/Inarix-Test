import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {isAuth, getCookie, signout } from '../helpers/Helpers';
import axios from 'axios';
import {listSamples} from '../user/apiUser';



const AdminDashboard = () => {

    const token = getCookie('accessToken');
    const Id = getCookie('accessToken');

    const [values, setValues] = useState({
        
        email: '',
        buttonText: 'Update'
    })

    const { email} = values;
    const [samples, setSamples] = useState([])

    const loadSamples = () => {
        listSamples(token,'createdAt').then(data => {
            if (data.error){
                console.log(data.error)
            } else{
                setSamples(data)
            }
        })
    }

    const LoadProfileInfo = () => (
        <>
            <div className=' card mb-5' id="header-content">
                <h3 className='card-header'>Info User</h3>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        Good Day! {isAuth().email}
                    </li>
                    
                </ul>
                
            </div>

            <h2 className='text-center mb-5'>Admin Links</h2>
            <ul className='list-group'>
                    <li className='list-group-item'>
                            <Link to='/admin/samples'>SAMPLES</Link>
                        </li >
                        <li className='list-group-item'>
                            <Link to='/admin/browsecereals'>BROWSE CEREALS</Link>
                        </li>
                        <li className='list-group-item'>
                            <Link to='/admin/browseusers'>BROWSE USERS</Link>
                        </li> 
                        <li className='list-group-item'>
                            <Link to='/admin/browsemodels'>BROWSE MODELS</Link>
                        </li>
                        <li className='list-group-item'>
                            <Link to='/admin/browsepredictions'>BROWSE PREDICTIONS</Link>
                        </li>
                        <li className='list-group-item'>
                            <Link to='/admin/browsesamples'>BROWSE SAMPLES</Link>
                        </li>  
                </ul>
            
        </>
    )


    return(
        <>
        <div className='container'>
            <h1 className='mt-5 mb-5'>{isAuth().email} Dashboard</h1>
                {LoadProfileInfo()}
                
                {/* {JSON.stringify(samples)} */}
                


        </div>
        </>
    )
}


export default AdminDashboard