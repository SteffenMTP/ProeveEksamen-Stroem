import React, { useEffect } from 'react';
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
    getData("http://localhost:5333/news");
  }, []);

  // Sort data by date in descending order (newest to oldest)
  const sortedData = data
    ? data.slice().sort((a, b) => new Date(b.received) - new Date(a.received))
    : [];

  return (
    <div className="container">
      {/*Error*/}
      {error && <Error />}

      {/*Loading*/}
      {loading && <Loader />}

      {/*Data*/}
      <div className="row">
        <div className="col-md-12">
          <div className="OurTeamContainer text-center">
            <h2>Sidste nyt</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eisum tempor</p>
          </div>
        </div>
      </div>

      <div className="row">
        {data && sortedData.slice(0, 3).map((d) => (
          <div className="col-md-4" key={d._id}>
            <div className="card mb-4">
              <div className="text-center position-relative">
                <div className="position-absolute top-0 start-0">
                  <FaBookmark size={75} color="orange" />
                </div>
                <p className="position-relative top-0 ms-2">
                  {new Date(d.received).toLocaleString("da-dk", {
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <img
                  src={"http://localhost:5333/images/news/" + d.image}
                  className="NewsPic rounded card-img-top"
                  alt="Articles"
                />
                <div>
                  <h2 className="card-title">{d.title}</h2>
                  <p className="card-text">{d.content.slice(0, 150)}...</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-md-12">
          <NavLink
            end
            className="nav-link text-center"
            aria-current="page"
            to="/news"
          >
            <button className="btn btn-primary">Flere Nyheder ...</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default News_Front;