import { React, useEffect } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader';

//Import eget hook - som laver request til API
import useGetData from '../../hooks/useGetData'

const Service_Front = () => {

    //request-hook
    const { error, loading, data, getData } = useGetData();

    useEffect(() => {

        getData("http://localhost:5333/service"
        )


    }, [])

    return (
        <>
            {/*Error*/}
            {error && <Error />}

            {/*Loading*/}
            {loading && <Loader />}

            {/*Data*/}
            <h2>Vores Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eisum tempor</p>
            <div className='ServiceContainer d-flex p-5'>
                <div className="row row-cols-2 g-2">
                    {data && data.map((d) =>
                        <div className="col" key={d._id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <span>{d.icon}</span>
                                    <h3>{d.title}</h3>
                                    <p>{d.teaser}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <img src="./about/1.png" className='row' alt="Portrait of a woman, wearing a helmet, in a striped tanktop, with multiple tools in one hand" />
            </div>
            <form className='BookServiceContainer d-flex justify-content-center mb-5'>
                <p>Book Service Nu</p>
                <input type="text" name="Name" id="" placeholder='Dit Navn'/>
                <input type="email" name="Email" id="" placeholder='Din Email' />
                <input type="text" name="Phone" id="" placeholder='Telefon nr.' />
                <input type="submit" value="Send" />
            </form>
        </>
    )
}

export default Service_Front;