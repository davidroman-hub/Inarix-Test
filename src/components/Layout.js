import {Link, withRouter} from 'react-router-dom';
import React from 'react';
import {isAuth, signout} from '../helpers/Helpers';
import '../styles/components/_layout.scss'

//images

import Logo from '../images/inarix-epi-jaune.png'

const Layout = ({children,history,match}) => {


    const nav = () => (
    <nav className="__nav-bar navbar navbar-expand-lg navbar-light  sticky-top" >
        <Link className="navbar-brand" style={{marginRight:'', fontSize:'25px' }} to='/'>
            <img alt='logo' width='50px' height='50px' src={Logo}/><span style={{fontWeight:'bold', color:'#EBEBEB',letterSpacing:'1px'}}>inarix</span>
        </Link>
            <button className="navbar-toggler" style={{backgroundColor:'#FFC100'}} type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className='navbar-nav mr-auto'>
                    
                    <li className="nav-item">
                        <Link className="nav-link" to='/' style={{color:'#EBEBEB', fontWeight:'bold'}}>á propos</Link>
                    </li>
                    
                    
                    {!isAuth() && (
                        <>
                    <li className="nav-item">
                        <Link className="nav-link" to='/signin' style={{color:'#EBEBEB', fontWeight:'bold'}}>Sign in</Link>
                    </li>
                    
                        </>
                    )}

                    {isAuth()  && (
                    <li className="nav-item">
                        <Link className="nav-link" style={{color:'#EBEBEB', fontWeight:'bold'}} to="/user/dashboard">
                        {isAuth().email}
                        </Link>    
                    </li>    
                    )}
                    {isAuth() && (
                    <li className="nav-item">
                        <span className="nav-link"
                                style={{cursor:'pointer',color:'#E76450', fontWeight:'bold'}}
                                onClick={()=>{
                                    signout(()=>{
                                        history.push('/')
                                    })
                                }}>Sign Out</span>
                    </li>    
                    )}
                </ul>
            </div>
    </nav>
    )


    return(
        <>
            {nav()}
            {children}
        </>
    )
}

export default withRouter(Layout)