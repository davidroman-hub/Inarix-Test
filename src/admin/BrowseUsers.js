

import React,{useState,useEffect} from 'react';
import {listUsers} from '../admin/apiAdmin';
import { getCookie } from '../helpers/Helpers';


const BrowseUsers = () => {

    const token = getCookie('accessToken');
    const [users, setUsers] = useState([])

    const loadCereals = () => {
        listUsers(token,'createdAt').then(data => {
            if (data.error){
                console.log(data.error)
            } else{
                setUsers(data)
            }
        })
    }
        const [loading] = useState(false);
        const [search, setSearch] = useState("");
        const [filteredUsers, setFilteredUsers] = useState([]);

        
        useEffect(() => {
            loadCereals()
        }, []);

        useEffect(() => {
            setFilteredUsers(
            users.data?.filter((cereal) =>
                cereal.email.toLowerCase().includes(search.toLowerCase())
            )
        );
        }, [search, users]);
        
        if (loading) {
            return <p>Loading Users...</p>;
        }
      //console.log(filteredCountries)
        return (
        <div className="App">
            <input
                type="text"
                placeholder="Search Users with E-mail"
                onChange={(e) => setSearch(e.target.value)}
                />
                {/* {JSON.stringify(filteredCereals)} */}
                {filteredUsers?.map(((c,i) => {
                    return(
                    <>
                    <div  key={i} className="card mr-2 mt-2 mb-5">
                        <div >Name : {c.email}</div>
                        <div >ID : {c.id}</div>
                        <div >{c.createdAt}</div>
                    </div>
                    </>
                )
            }))}
        </div>
        );
    }

export default BrowseUsers