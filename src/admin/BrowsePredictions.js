
import React,{useState,useEffect} from 'react';
import {listPredictions} from '../admin/apiAdmin';
import { getCookie } from '../helpers/Helpers';


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

        return (
            <div className='container'>
                {predictionLabel()}
            </div>
        );
    }



export default BrowsePredictions