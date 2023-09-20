import { React, useEffect } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';

//Import eget hook - som laver request til API
import useGetData from '../hooks/useGetData'

import LeafletMap from '../helpers/LeafletMap'

const Contact = () => {

  //request-hook
  const { error, loading, data, getData } = useGetData();

  useEffect(() => {

    getData("http://localhost:5333/contactinformation"
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
        <>
          <h2>Kontakt os</h2>
          <div className="container d-flex justify-content-center">
            <p>Adresse</p>
            <address>{data.address}</address>
            <p>Telefon</p>
            <p>{data.phone}</p>
            <p>email</p>
            <p>{data.email}</p>
          </div>
          <form action="" className=''>
            <input type="text" name="name" id="name" placeholder='Dit navn' />
            <input type="email" name="email" id="email" placeholder='Din Email' />
            <input type="text" name="phone" id="phone" placeholder='Telefon nr.' />
            <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder='Din besked...'></textarea>
            <button type="submit" className='btn btn-primary'>SEND BESKED</button>
          </form>
          <div className='mapContainer'>
            <LeafletMap />
          </div>
          {/* coord={[56, 10]} popupinfo={"Du kan finde os her:"} */}
        </>
      }
    </>
  )
}

export default Contact