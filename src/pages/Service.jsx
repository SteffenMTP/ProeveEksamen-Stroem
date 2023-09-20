import { React, useEffect } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Parse from 'html-react-parser';
import '../components/FrontPage/Service_Front.scss';

//Import eget hook - som laver request til API
import useGetData from '../hooks/useGetData';

const Service = () => {

  //request-hook
  const { error, loading, data, getData } = useGetData();

  useEffect(() => {

    getData("http://localhost:5333/service"
    )


  }, [])

  return (
    <div>
      <h1>Services</h1>

      {/*Error*/}
      {error && <Error />}

      {/*Loading*/}
      {loading && <Loader />}

      {
        data && data.map((s)=>

          <article>
            <h2><span>{"fi " + s.icon}</span>{s.title}</h2>
            <p>{s.teaser}</p>
            <div>{Parse(s.content)}</div>
          </article>

        )
      }

    </div>
  )
}

export default Service