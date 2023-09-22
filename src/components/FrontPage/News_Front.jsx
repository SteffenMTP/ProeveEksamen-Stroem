import { React, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import { FaBookmark } from 'react-icons/fa';

//Import eget hook - som laver request til API
import useGetData from '../../hooks/useGetData';

const News_Front = () => {

  //request-hook
  const { error, loading, data, getData } = useGetData();

  useEffect(() => {

    getData("http://localhost:5333/news"
    )


  }, [])

  // Sort data by date in descending order (newest to oldest)
  const sortedData = data
    ? data.slice().sort((a, b) => new Date(b.received) - new Date(a.received))
    : [];

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
      <div className='row grid-gap-4 grid-cols-2'>
        {data && sortedData.slice(0, 3).map((d) =>
          <div className="col" key={d._id}>
            <div className='card'>
              <div className='text-center position-relative'>
                <div className='position-absolute'>
                  <span className='position-absolute top-0 start-0'><FaBookmark size={75} color='orange' /></span>
                  <p className='position-relative top-0 text-white ms-2'>{new Date(d.received).toLocaleString("da-dk", { month: "short", day: "numeric" })}</p>
                </div>
                  <img src={"http://localhost:5333/images/news/" + d.image} className='NewsPic rounded card-img-top' alt="Articles" />

                <div>
                  <h2 className='card-title'>{d.title}</h2>
                  <p className='card-text'>{d.content.slice(0, 150)}...</p>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
      <NavLink end className="nav-link text-center" aria-current="page" to="/news"><button className='btn btn-primary'>Flere Nyheder ... </button></NavLink>

    </>
  )
}

export default News_Front