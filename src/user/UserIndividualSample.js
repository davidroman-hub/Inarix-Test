
import React,{useState,useEffect} from 'react';
import {getCookie} from '../helpers/Helpers';
import moment from 'moment';
import { read } from '../admin/apiAdmin';
import SingleMap from '../admin/Google';
import samplesPhoto from '../images/samples.png';
import SideBar from './sideBarUser';


const IndividualSample = (props) => {


    const token = getCookie('accessToken')  //// <-- right one
    //const Id = getCookie('token')
    const [order, setOrder] = useState({});
    const [error, setError] = useState(false);

    const loadSingleOrder = orderId => {
        read(orderId,token).then( data => {
            if (data.error){
                setError(data.error)
            } else {
                setOrder(data)
            }
        })
    }


    useEffect (() => {
        const orderId = props.match.params.orderId
        loadSingleOrder(orderId)
        
    },[props])


    const showSingleSample = () => {
        return (
            
            <div className="mr-2 mt-2 mb-5">
                    <div className='container-samples' >
                        <ul className="list-group">
                                    <img src={samplesPhoto} alt='/'  style={{maxHeight:'100%', maxWidth:'100%'}}/>
                                    <li className="list-group-item">Created by : {order.userId}</li>
                                    <li className="list-group-item">Cereal ID: {order.cerealId}</li>
                                    
                                    <li className='list-group-item' style={{fontWeight:'bold'}}>Created At:{" "}
                                            {moment(order.createdAt).locale('es').format('LL')}
                                    </li>
                                        <h2 className='mt-5 mb-5 text-center' >METADATA :</h2>
                                        <p className='text-center'>LATITUDE : {order.metadata?.latitude}</p>
                                        <p className='text-center'>LONGITUDE : {order.metadata?.longitude}</p>
                                        <p className='text-center'>PRECISION : {order.metadata?.precision}</p>
                        </ul>
                        <SingleMap/>
                    </div>
            </div>
        )
    }


    

    return(
        <>
        
            <div className='__admin-dashboard-flex'>
                <div>
                    <SideBar/>
                </div>
                <div className='__info-tables-samples'>
                <h2 className=" text-center mt-5" style={{color:'#E76450'}}> ID Sample : {order.id}</h2>
                    {showSingleSample()}
                </div>
                    
            </div>
        </>
    )
}


export default IndividualSample