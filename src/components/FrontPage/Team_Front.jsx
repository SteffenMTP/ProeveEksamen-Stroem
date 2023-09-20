import { React, useEffect } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader';

//Import eget hook - som laver request til API
import useGetData from '../../hooks/useGetData'

const Team_Front = () => {

    //request-hook
    const { error, loading, data, getData } = useGetData();

    useEffect(() => {

        getData("http://localhost:5333/team"
        )


    }, [])

    return (
        <>
            {/*Error*/}
            {error && <Error />}

            {/*Loading*/}
            {loading && <Loader />}

            {/*Data*/}
            <div className='OurTeamContainer text-center'>
                <h2>Vores team</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eisum tempor</p>
            </div>
            <div className='row'>
            {data && data.map((d) =>
                    <div className="col" key={d._id}>
                        <div className='overallContainer'>
                            <div className='card-body text-center'>
                                <img src={"http://localhost:5333/images/team/" + d.image} alt="Portraits of the team" />
                                <h2>{d.name}</h2>
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

export default Team_Front