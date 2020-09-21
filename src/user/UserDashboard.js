import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {isAuth, getCookie, signout } from '../helpers/Helpers';
import axios from 'axios';


const UserDashboard = () => {

    const token = getCookie('accessToken');
    const Id = getCookie('accessToken');

    const [values, setValues] = useState({
        
        email: '',
        buttonText: 'Update'
    })

    const { email} = values;


    const loadProfile = ({history}) => {
        axios({
            method: 'GET',
            url:`${process.env.REACT_APP_API}/users/${isAuth()._id}`,
            headers: {
                Authorization:`Bearer ${token}`
            }
        })
        .then(response=>{
            console.log('profile ', response) //<-- populate state
            const {email} = response.data
            setValues({...values, email})
        })
        .catch(error => {
            console.log('Profile error', error.response.data.error)
            if(error.response.status == 401){
                signout(() => {
                    history.push('/'); //<-- for signout automatically
                })
            } 
        })
    }

    const LoadProfileInfo = () => (
        <>
            <div className=' card mb-5' id="header-content">
            <h3 className='card-header'>Info User</h3>
            <ul className='list-group'>
                {/* <li className='list-group-item'>
                    Hello! 
                </li>
                <li className='list-group-item'>
                    E-mail: {isAuth().email}
                </li>
                <li className='list-group-item'>
                    Samples: 
                </li> */}
            </ul>
        </div>
            
        <div className='card mb-5'>
            {/* <h4 className='text-center'>Antes de Ordenar es importante actualizar tu información!!</h4> */}
        
            {/* <h5 className='text-center'>Necesitamos tu dirección de envío y tu telefono para poder contactarte!</h5> */}
            <li className='list-group-item'>
                <Link to='/user/private' >User Dashboard</Link>
            </li>
            <li className='list-group-item'>
                <Link to='/admin/dashboard' >Admin Dashboard</Link>
            </li>
        </div>
    </>
    )

    useEffect(() => {
        //loadinit(Id, token)
        //loadProfile()
        //loadOrders()
    },[])

    return(
        <>
        <div className='container'>
            <h1 className='mt-5 mb-5'>Dashboard User and Admin</h1>
            <h3>Here you will see two differents Dashboard as an User and as an Admin</h3>
            <h4 className='mb-5'>To see the differents function beetween each other</h4>
                {LoadProfileInfo()}

        </div>
        </>
    )
}


export default UserDashboard