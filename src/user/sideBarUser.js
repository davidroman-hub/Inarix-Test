import React from 'react';
import '../styles/components/_journal.scss';
import {Link,withRouter} from 'react-router-dom';
import {isAuth, signout} from '../helpers/Helpers';


export const Sidebar = ({history}) => {



    return (
        <aside className='journal__sidebar'>
            <div className='journal__sidebar-navbar'>
                <h3 className='mt-5 mb-3'>
                    <i className='far fa-moon'></i>
                    <span> Good Day {isAuth().email} </span>
                </h3>
            </div>
            <h2 className='text-center mb-5 mt-5'>User Links</h2>
            <ul className='list-group text-center admin-links'>
                        <li className='btn btn-secondary mb-2' >
                            <Link style={{textDecoration:'none', color:'#EBEBEB'}} to='/user/samples'>SAMPLES</Link>
                        </li >
                        <li className='btn btn-secondary mb-2'>
                            <Link to='/user/browsecereals' style={{textDecoration:'none', color:'#EBEBEB'}}>BROWSE MY CEREALS</Link>
                        </li>
                        
                        <li className='btn btn-secondary mb-2'>
                            <Link to='/user/browsemodels' style={{textDecoration:'none', color:'#EBEBEB'}}>BROWSE MY MODELS</Link>
                        </li>
                    
                </ul>
            <div className='journal__new-entry'>
                {isAuth() && (
                    <li className="nav-item">
                        <i className='fas fa-sign-out-alt fa-3x'
                                style={{cursor:'pointer',color:'#E76450', fontWeight:'bold'}}
                                onClick={()=>{
                                    signout(()=>{
                                        history.push('/')
                                    })
                            }}></i><br/>
                            Sign out
                    </li>    
                    )}
            </div>
        </aside>
    )
}
export default withRouter(Sidebar)