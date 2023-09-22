import React, { useEffect, useState } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Parse from 'html-react-parser';
import '../components/FrontPage/Service_Front.scss';

// Import eget hook - som laver request til API
import useGetData from '../hooks/useGetData';

const Service = () => {
  // request-hook
  const { error, loading, data, getData } = useGetData();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    getData("http://localhost:5333/service");
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="container service-container">
      <h1>Services</h1>

      <div className="row">
        <div className="col-md-4">
          {/* Error */}
          {error && <Error />}

          {/* Loading */}
          {loading && <Loader />}

          <div className="service-buttons d-flex flex-column">
            {data &&
              data.map((s) => (
                <button
                  className="btn border"
                  key={s._id}
                  onClick={() => handleServiceClick(s)}
                >
                  <h2>{s.title} &#x2192;</h2>
                </button>
              ))}
          </div>
        </div>
        <div className="col-md-8">
          <div className="service-details">
            {selectedService && (
              <>
                <img src={"http://localhost:5333/images/service/" + selectedService.image} style={{width: "80%"}} />
                <h2>{selectedService.title}</h2>
                <p>{selectedService.teaser}</p>
                <div>{Parse(selectedService.content)}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;