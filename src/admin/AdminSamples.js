import React, {useEffect,useState} from 'react'; 
import {Link} from 'react-router-dom';
import {isAuth, getCookie } from '../helpers/Helpers';
import {listSamples} from '../user/apiUser';
import moment from 'moment';



const AdminSamples = () => {

    const token = getCookie('accessToken');
    
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

    const ShowSamples = () => {
        return(
            <>
            <div>
                <h1 className="p-5 text-center text-danger "> Total Samples : {samples.total}</h1>
                    
                    {samples.data?.map((s,i) => (
                        <div className='container'>
                        <ul key={i} className='list-group-item'>
                            <li className="mb-1 mt-2 text-center"  style={{color:'#888888', backgroundColor:'#efc8a7', fontWeight:'bolder'}}>Sample ID {s.id}</li>
                            <li className="mb-1 mt-2 text-center ">created by: {s.userId}</li>
                            <li className="mb-1 mt-2 text-center " style={{fontWeight:'bold'}}>Created At:{" "}
                                            {moment(s.createdAt).locale('es').format('LL')}</li>
                            <li className='mb-1 mt-2 text-center'>    <Link to={`samples/${s.id}`}>
                                
                                    <span className='TallerButton' >Info</span>
                                </Link>
                            </li>    
                        </ul>
                        </div>
                    ))}
                
                </div>
            </>
        )
    }

    useEffect(() => {
        //loadinit(Id, token)
        //loadProfile()
        loadSamples()
    },[])


    return(
        <>
        <div className='container'>
            <h1 className='mt-5 mb-5'>{isAuth().email} Dashboard</h1>
                {ShowSamples()}
                


        </div>
        </>
    )
}


export default AdminSamples