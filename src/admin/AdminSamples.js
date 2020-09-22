import React, {useEffect,useState} from 'react'; 
import {Link} from 'react-router-dom';
import { getCookie } from '../helpers/Helpers';
import {listSamples} from '../user/apiUser';
import moment from 'moment';
import SideBar from './SideBar';
import '../styles/components/_samplesAdmin.scss'
import semillas from '../images/samples.png'

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
        <div className='samplesDisplay' >    
            <div>
                <h2 className=" text-center mt-5" style={{color:'#E76450'}}> Total Samples : {samples.total}</h2>
                    <div className='__content-info' style={{maxHeight: '900px', overflow:'scroll'}} >
                        {samples.data?.map((s,i) => (
                            <div className='container-samples' >
                            <ul key={i} className='list-group-item'>
                            <div className='photo-cereal'>
                                <img src={semillas} alt='/'  style={{maxHeight:'100%', maxWidth:'100%'}}/>
                            </div>
                                <li className="mb-1 mt-2 text-center"  style={{color:'#888888', backgroundColor:'#ffc100', fontWeight:'bolder'}}>Sample ID {s.id}</li>
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
                </div>
        </div>        
        </>
        )
    }

    useEffect(() => {
        loadSamples()
    },[])


    return(
        <>
            <div className='__admin-dashboard-flex'>
                <div>
                    <SideBar/>
                </div>
                <div className='__info-tables-samples'>
                    {ShowSamples()}
                </div>
                    
            </div>
        </>
    )
}


export default AdminSamples