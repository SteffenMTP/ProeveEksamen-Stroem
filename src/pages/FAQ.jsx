import { React, useEffect, useState } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';
import '../SASS/FAQ.scss';

//Import eget hook - som laver request til API
import useGetData from '../hooks/useGetData';

const FAQ = () => {

  //request-hook
  const { error, loading, data, getData } = useGetData();

  const [activeAccordion, SetActiveAccordion] = useState();

  useEffect(() => {

    getData("http://localhost:5333/faq"
    )


  }, []);

  return (
    <div>
      <h1>FAQ - ofte stillede spørgsmål</h1>

      {/*Error*/}
      {error && <Error />}

      {/*Loading*/}
      {loading && <Loader />}

      {/* Data */}
      {data && data.map((s) =>

        <article className={activeAccordion === s._id ? 'activeFAQ' : ''} onClick={()=> SetActiveAccordion(s._id)} key={s._id}>
          <h2 className='accordion'>{s.question}</h2>
          <p className='panel'>{s.answer}</p>
        </article>
      
      )}

    </div>
  )
}

export default FAQ