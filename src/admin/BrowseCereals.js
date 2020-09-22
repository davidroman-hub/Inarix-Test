import React,{useState,useEffect} from 'react';
import {listCereals} from '../admin/apiAdmin';
import { getCookie } from '../helpers/Helpers';


const BrowseCereals = () => {

    const token = getCookie('accessToken');
    const [cereals, setCereals] = useState([])

    const loadCereals = () => {
        listCereals(token,'createdAt').then(data => {
            if (data.error){
                console.log(data.error)
            } else{
                setCereals(data)
            }
        })
    }
        const [loading, setLoading] = useState(false);
        const [search, setSearch] = useState("");
        const [filteredCereals, setFilteredCereals] = useState([]);

        
        useEffect(() => {
            loadCereals()
        }, []);

        useEffect(() => {
          setFilteredCereals(
            cereals.data?.filter((cereal) =>
              cereal.name.toLowerCase().includes(search.toLowerCase())
            )
          );
        }, [search, cereals]);
      
        if (loading) {
          return <p>Loading cereals...</p>;
        }
      //console.log(filteredCountries)
        return (
          <div className="App">
              <input
                type="text"
                placeholder="Search Cereals"
                onChange={(e) => setSearch(e.target.value)}
              />
                {/* {JSON.stringify(filteredCereals)} */}
                {filteredCereals?.map(((c,i) => {
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



export default BrowseCereals