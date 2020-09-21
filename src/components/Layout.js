import {Link, withRouter} from 'react-router-dom';
import React from 'react';
import {isAuth, signout} from '../helpers/Helpers';

const Layout = ({children,history}) => {

    const nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <Link className="navbar-brand" style={{marginRight:'100px', fontFamily:'Meie Script', fontSize:'35px' }} to='/'>Inarix</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className='navbar-nav mr-auto'>
                    <li className=" nav-item">
                        <Link to='/' className=" nav-link" > Home</Link>
                    </li>
                    
                    
                    {!isAuth() && (
                        <>
                    <li className="nav-item">
                        <Link className="nav-link" to='/signin' style={{color:'#78c2ad'}}>Sign In</Link>
                    </li>
                    
                        </>
                    )}

                    {isAuth()  && (
                    <li className="nav-item">
                        <Link className="nav-link" to="/user/dashboard">
                        {isAuth().email}
                        </Link>    
                    </li>    
                    )}
                    {isAuth() && (
                    <li className="nav-item">
                        <span className="nav-link"
                                style={{cursor: 'pointer', color: '#000'}}
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

export default Layout