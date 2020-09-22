import React,{useState,useEffect} from 'react';
import {listCereals} from '../admin/apiAdmin';
import { getCookie } from '../helpers/Helpers';
import  { Sidebar } from './SideBar';
import moment from 'moment';
import '../styles/components/_browseCereals.scss';
import seeds from '../images/semillas.jpg'

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

        const showResults = () => (
          <>
          <div className=''>
          <h2 className=" text-center mt-5" style={{color:'#E76450'}}> Total Samples {cereals.total}</h2>
            <div className="results">
            <div className="input-search md-form mt-5 mb-5 ">
              <input
                className='form-control'
                type="text"
                placeholder="Search Cereals"
                onChange={(e) => setSearch(e.target.value)}
              />
              </div>
                {/* {JSON.stringify(filteredCereals)} */}
                <div className='content-info' style={{maxHeight: '900px', overflow:'scroll'}}>
                {filteredCereals?.map(((c,i) => {
                  return(
                    <>
                    <div className='container-search' >
                    <div  key={i} className="card mr-2 mt-2 mb-5">
                      <div className='photo-cereal'>
                        <img src={seeds} alt='/'  style={{maxHeight:'100%', maxWidth:'100%'}}/>
                      </div>
                      <div >Cereal Name : {c.name}</div>
                      <div >Cereal ID : {c.id}</div>
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
       //console.log(filteredCountries)
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



export default BrowseCereals