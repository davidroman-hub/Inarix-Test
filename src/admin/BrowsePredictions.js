
import React,{useState,useEffect} from 'react';
import {listPredictions} from '../admin/apiAdmin';
import { getCookie } from '../helpers/Helpers';
import  { Sidebar } from './SideBar';
import moment from 'moment';
import '../styles/components/_browseCereals.scss';
import seeds from '../images/barley.jpg'


const BrowsePredictions = () => {

    const token = getCookie('accessToken');
    const [predictions, setpredictions] = useState("")

    const loadPredictions = () => {
        listPredictions(token,'createdAt').then(data => {
            if (data.error){
                console.log(data.error)
            } else{
                setpredictions(data)
            }
        })
    }
        const [loading] = useState(false);
        const [search, setSearch] = useState("");
        const [filteredPredictions, setFilteredPredictions] = useState([]);

        

        
        useEffect(() => {
            loadPredictions()
        }, []);

        useEffect(() => {
            setFilteredPredictions(
            predictions.data?.filter((cereal) =>
                cereal.label.toLowerCase().includes(search.toLowerCase()),
            )
        );
        }, [search, predictions]);
        
        if (loading) {
            return <p>Loading Models...</p>;
        }


        const predictionLabel = () => (
            <div className="App">
                <h1>Total predictions: {predictions.total}</h1>
            <input
                type="text"
                placeholder="Search Models label"
                onChange={(e) => setSearch(e.target.value)}
                />
                {/* {JSON.stringify(filteredCereals)} */}
                {filteredPredictions?.map(((c,i) => {
                    return(
                    <>
                    <div  key={i} className="card mr-2 mt-2 mb-5">
                        <div >Label : {c.label}</div>
                        <div >ID : {c.id}</div>
                        <div >Sample ID : {c.sampleId}</div>
                        <div >Cereal ID : {c.cerealId}</div>
                        <div >created by : {c.userId}</div>
                        <div >{c.createdAt}</div>
                    </div>
                    </>
                )
            }))}
        </div>
        )

        const showResults = () => (
            <>
            <div className=''>
            <h2 className=" text-center mt-5" style={{color:'#E76450'}}> Total Predictions {predictions.total}</h2>
                <div className="results">
                <div className="input-search md-form mt-5 mb-5 ">
                <input
                    className='form-control'
                    type="text"
                    placeholder="Search Predictions Label"
                    onChange={(e) => setSearch(e.target.value)}
                />
                </div>
                  {/* {JSON.stringify(filteredCereals)} */}
                    <div className='content-info' style={{maxHeight: '900px', overflow:'scroll'}}>
                    {filteredPredictions?.map(((c,i) => {
                    return(
                        <>
                        <div className='container-search' >
                        <div  key={i} className="card mr-2 mt-2 mb-5">
                            <div className='photo-cereal'>
                                <img src={seeds} alt='/'  style={{maxHeight:'100%', maxWidth:'100%'}}/>
                            </div>
                            <div style={{fontWeight:'bold'}} >Prediction Label: {c.label}</div>
                            <div >Prediction ID : {c.id}</div>
                            <div >Sample ID : {c.sampleId}</div>
                            <div >Cereal ID : {c.cerealId}</div>
                            <div >created by : {c.userId}</div>
                                <div className='' style={{fontWeight:'bold'}}>Created At:{" "}
                                                    {moment(c.createdAt).locale('es').format('LL')}
                                </div>
                        </div>
                        </div>
                    </>
                    )
                }))}
            </div>
            </div>
            </div>
            </>
        )

        return (
            <div className='__admin-dashboard-flex'>
                <div>
                    <Sidebar/>
                </div>
                <div className='__info-tables-search'>
                    {showResults()}
                </div>
            </div>
        );
    }



export default BrowsePredictions