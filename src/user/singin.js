import React,{useState} from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import {authenticate, isAuth} from '../helpers/Helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



const Signin = ({history}) => {

    const [values, setValues] = useState({
        strategy:'local',
        email: 'admin@inarix.com',
        password: 'test',
        
    });

    const { strategy,email, password } = values;

    const handleChange = name => event => {
        // console.log(event.target.value);
        setValues({ ...values, [name]: event.target.value });
    }

    const clickSubmit = event  => {
        event.preventDefault();
        console.log(values)
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/authentication`,
            data: { strategy,email, password }
        })
            .then(response => {
                    console.log('SIGNIN SUCCESS', response);
                    // save the respnse (user, token) in local storage/cookie  
                    authenticate(response, () => {
                    setValues({ ...values, name: '', email: '', password: '', buttonText: 'ENTRANDO...' });
                    //toast.success(`Hey ${response.data.user.name}, Welcome back!`);
                    isAuth() && isAuth().role === 1 ? history.push('/') : history.push('/user/dashboard')
                });
            })
            .catch(error => {
                console.log('SIGNIN ERROR', error.response.data);
                setValues({ ...values, buttonText: 'ENTRAR' });
                toast.error(error.response.data.error);
            });

    }



    const SigninForm = () => {
        return(
        <div className='Form-design'>
            <form className=''>
            <div className='form-group'>
                <label className="text-muted">Strategy</label>
                    <input onChange={handleChange('strategy')} value={strategy} type='email' className='form-control my-input' disabled/>
                </div>
                <div className='form-group'>
                <label className="text-muted">E-mail</label>
                    <input onChange={handleChange('email')} value={email} type='email' className='form-control my-input'/>
                </div>
                <div className='form-group'>
                <label className="text-muted">Password</label>
                    <input onChange={handleChange('password')} value={password} type='password' className='form-control my-input'/>
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary send-button btn-lg' onClick={clickSubmit}>Singin</button>
                </div>
            </form>
        </div>
        )
    }



    const SigninForm2 = () => {
        return(
            <>
                <div className="singinForm col-md-6 offset-md-3 mt-3">
                    <ToastContainer/>
                    {isAuth() ? <Redirect to='/'/> : null}
                    <br/>
                    <h2>Sign In</h2>
                    <div className='plant mb-2'>
                        <img className='plant text-center img img-fluid' src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1596538045/Healing%20love/welcome_o7jzli.jpg' alt='healing-love'/>
                    </div>
                        {SigninForm()}
                        <div className='mt-4'> 
                        
                            <br/>
                        </div>
                </div>
            </>
        )
    }
    
    return(
    <>
        {SigninForm2()}
    </>
    )
}

export default Signin