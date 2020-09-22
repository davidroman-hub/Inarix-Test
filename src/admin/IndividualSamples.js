
import React,{useState,useEffect, Fragment} from 'react';
import {getCookie} from '../helpers/Helpers';
import moment from 'moment';
import { read } from './apiAdmin';


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



    const showInput = (key, value) => {
        return (
            <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">{key}</div>
                </div>
                <input type="text" value={value} className="form-control" readOnly/>
            </div>
        )
    }




    useEffect (() => {
        const orderId = props.match.params.orderId
        loadSingleOrder(orderId)
        
    },[props])


    const showSingleSample = () => {
        return (
            <div className="card mr-2 mt-2 mb-5">
                
                <ul className="list-group">

                                    <li className='list-group-item'>ID Sample: {order.id} </li>   
                                    <li className="list-group-item">User ID: {order.userId}</li>
                                    <li className="list-group-item">Cereal ID: {order.cerealId}</li>
                                    
                                    <li className='list-group-item' style={{fontWeight:'bold'}}>Created At:{" "}
                                            {moment(order.createdAt).locale('es').format('LL')}
                                    </li>
                                        <h2 className='mt-2 mb-5 text-center' >METADATA :</h2>
                                        {order.data?.map((p, pIndex) => (
                                            <div className='mb-4' key={pIndex} style={{padding:'20px', border:'1px solid indigo'}}
                                            
                                            >
                                                
                                                {showInput('Latitude:', order.metadata.latitude)} 
                                                {showInput('Longitude:', p.longitude)}  
                                                {/* {showInput('Cantidad pedida del producto:', p.count)}   */}
                                                {/* {showInput('ID del producto:', p._id)}    */}
                                </div> ))}
                                
                        </ul>
            </div>
        )
    }


    return(
        <>
            <h1>Soy Individual samples</h1>
            <div className='container'>
                {showSingleSample()}
                {JSON.stringify(order.metadata)}
            </div>
        </>
    )
}


export default IndividualSample