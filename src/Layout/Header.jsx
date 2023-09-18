import { React, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Error from '../components/Error';
import Loader from '../components/Loader';
import '../SASS/General.scss';
import {FaMapMarkerAlt, FaClock, FaPhone} from 'react-icons/fa'

//Import eget hook - som laver request til API
import useGetData from '../hooks/useGetData'


const Header = () => {

    //request-hook
    const { error, loading, data, getData } = useGetData();

    useEffect(() => {

        getData("http://localhost:5333/contactinformation"
        )


    }, [])
    

    return (
        <>
            <header>

                {/*Error*/}
                {error && <Error />}

                {/*Loading*/}
                {loading && <Loader />}

                {/*Data*/}
                <NavLink end className="nav-link" aria-current="page" to="/"><img src='./logo.png' alt="Stroem logo"/></NavLink>
                {data &&
                <div className='d-flex justify-content-end mx-2 '>
                        <FaMapMarkerAlt/><address className='m-1'>{data.address}</address>
                        <FaClock/><p className='m-1'>{data.openinghours}</p>
                        <FaPhone/><p className='m-1'>{data.phone}</p>
                </div>
                }
                    
                    

                   

            </header>
        </>
    )



}

export default Header;