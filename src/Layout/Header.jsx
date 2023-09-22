import { React, useEffect } from 'react';
import { Link } from "react-router-dom";
import Error from '../components/Error';
import Loader from '../components/Loader';
import '../SASS/General.scss';
import { FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa'

//Import eget hook - som laver request til API
import useGetData from '../hooks/useGetData';


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
                <div>
                    <Link to="/"><img src='./logo.png' alt="Stroem logo" /></Link>
                    {data &&
                        <div className='d-flex justify-content-end mx-2'>
                            <FaMapMarkerAlt className='mt-2 m-1' color='#ff6600ff' /><address className='m-1'>{data.address}</address>
                            <FaClock className='mt-2 m-1' color='#ff6600ff' /><p className='m-1'>{data.openinghours}</p>
                            <FaPhone className='mt-2 m-1' color='#ff6600ff' /><p className='m-1'>{data.phone}</p>
                        </div>
                    }
                </div>

            </header>
        </>
    )



}

export default Header;