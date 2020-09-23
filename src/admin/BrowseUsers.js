import React,{useState,useEffect} from 'react';
import {listUsers} from '../admin/apiAdmin';
import { getCookie } from '../helpers/Helpers';
import user from '../images/user.PNG';
import '../styles/components/_browseCereals.scss';
import  { Sidebar } from './SideBar';
import moment from 'moment';
import usersPhoto from '../images/user.PNG';

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
        
        const showResults = () => (
            <>
    <div className=''>
        <h2 className=" text-center mt-5" style={{color:'#E76450'}}> Total Users {users.total}</h2>
            <div className="results">
            <div className="input-search md-form mt-5 mb-5 ">
                <input
                className='form-control'
                type="text"
                placeholder="Search Users E-mail"
                onChange={(e) => setSearch(e.target.value)}
                />
            </div>
                {/* {JSON.stringify(filteredCereals)} */}
                <div className='content-info' style={{maxHeight: '900px', overflow:'scroll'}}>
                {filteredUsers?.map(((c,i) => {
                return(
                    <>
                    <div className='container-search' >
                    <div  key={i} className="card mr-2 mt-2 mb-5">
                        <div className='photo-cereal'>
                            <img src={usersPhoto} alt='/'  style={{maxHeight:'100%', maxWidth:'100%'}}/>
                        </div>
                        <div >User E-mail: {c.email}</div>
                        <div >User ID : {c.id}</div>
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

export default BrowseUsers