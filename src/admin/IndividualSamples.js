
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
                                        
                        </ul>
            </div>
        )
    }
    
    // const item = order.metadata.map((i) => {
    //     return(<h1>{i.latitude}</h1>)
    // })


    return(
        <>
            <h1>INDIVIDUAL samples</h1>
            <div className='container'>
                {showSingleSample()}
                {/* {convert()} */}
                {JSON.stringify(order.metadata)}
            
            </div>
        </>
    )
}


export default IndividualSample