
import React,{useState,useEffect} from 'react';
import {listModels} from '../admin/apiAdmin';
import { getCookie } from '../helpers/Helpers';


const BrowseModels = () => {

    const token = getCookie('accessToken');
    const [models, setModels] = useState([])

    const loadModels = () => {
        listModels(token,'createdAt').then(data => {
            if (data.error){
                console.log(data.error)
            } else{
                setModels(data)
            }
        })
    }
        const [loading] = useState(false);
        const [search, setSearch] = useState("");
        const [filteredModels, setFilteredModels] = useState([]);

        
        useEffect(() => {
            loadModels()
        }, []);

        useEffect(() => {
            setFilteredModels(
            models.data?.filter((cereal) =>
                cereal.name.toLowerCase().includes(search.toLowerCase())
            )
        );
        }, [search, models]);
        
        if (loading) {
            return <p>Loading Models...</p>;
        }
      //console.log(filteredCountries)
        return (
        <div className="App">
            <input
                type="text"
                placeholder="Search Models with Name"
                onChange={(e) => setSearch(e.target.value)}
                />
                {/* {JSON.stringify(filteredCereals)} */}
                {filteredModels?.map(((c,i) => {
                    return(
                    <>
                    <div  key={i} className="card mr-2 mt-2 mb-5">
                        <div >Name : {c.name}</div>
                        <div >ID : {c.id}</div>
                        <div >{c.createdAt}</div>
                    </div>
                    </>
                )
            }))}
        </div>
        );
    }


export default BrowseModels