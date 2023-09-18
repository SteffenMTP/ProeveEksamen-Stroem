import { React, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Error from '../../components/Error';
import Loader from '../../components/Loader';

//Import eget hook - som laver request til API
import useGetData from '../../hooks/useGetData'

const AboutFront = () => {

    //request-hook
    const { error, loading, data, getData } = useGetData();

    useEffect(() => {

        getData("http://localhost:5333/about"
        )


    }, [])


    return (
        <>

            {/*Error*/}
            {error && <Error />}

            {/*Loading*/}
            {loading && <Loader />}

            {/*Data*/}
                {data &&
                <div className='text-center py-5'>
                    <h2>{data.title}</h2>
                    <p>{data.teaser}</p>
                    <NavLink end className="nav-link" aria-current="page" to="/aboutus"><button className='btn btn-primary'>LÆS MERE</button></NavLink>
                      
                </div>
                }

        </>
    )
}

export default AboutFront;