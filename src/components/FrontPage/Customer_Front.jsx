import { React, useEffect } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import '../../SASS/General.scss';

//Import eget hook - som laver request til API
import useGetData from '../../hooks/useGetData'

const Customer_Front = () => {

    //request-hook
    const { error, loading, data, getData } = useGetData();

    useEffect(() => {

        getData("http://localhost:5333/testimonial"
        )


    }, [])

    return (

        <>
            {/*Error*/}
            {error && <Error />}

            {/*Loading*/}
            {loading && <Loader />}

            {/*Data*/}
            <div className='CustomerContainer text-center' style={{backgroundImage: `url("/windmill.jpg")`, backgroundRepeat: "no-repeat", height: "400px"}}>
                <h2>Vores kunder siger</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eisum tempor</p>
            </div>
            <div className='row d-flex justify-content-center g-2'>
                {data && data.slice(0, 3).map((d) =>
                    <div className="col" key={d._id}>
                        <div className='card d-flex'>
                            <div className='card-body text-center'>
                                <img src={"http://localhost:5333/images/testimonial/" + d.image} className='customerPic rounded-circle' alt="Portraits of various people whom have delivered a review" />
                                <h3>{d.name}</h3>
                                <p>{d.title}</p>
                                <p>{d.review}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>

    )
}

export default Customer_Front;