import { React, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Error from '../../components/Error';
import Loader from '../../components/Loader';

//Import eget hook - som laver request til API
import useGetData from '../../hooks/useGetData';

const News_Front = () => {

  //request-hook
  const { error, loading, data, getData } = useGetData();

  useEffect(() => {

    getData("http://localhost:5333/news"
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
        <h2>Sidste nyt</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eisum tempor</p>
      </div>
      <div className='row'>
        {data && data.slice(0, 3).map((d) =>
          <div className="col" key={d._id}>
            <div className='card'>
              <div className='card-body text-center'>
                <img src={d.image} className='NewsPic rounded' alt="Articles" />
                <h2>{d.title}</h2>
                <p>{d.content}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <NavLink end className="nav-link" aria-current="page" to="/news"><button className='btn btn-primary'>Flere Nyheder ... </button></NavLink>
      
    </>
  )
}

export default News_Front