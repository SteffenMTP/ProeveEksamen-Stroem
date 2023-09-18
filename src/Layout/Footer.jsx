import { React, useEffect } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';
import '../SASS/General.scss';
import { FaTwitter, FaVimeo, FaLinkedin, FaFacebook } from 'react-icons/fa'


//Import eget hook - som laver request til API
import useGetData from '../hooks/useGetData'

const Footer = () => {

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
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <img src="./logo-2.png" alt="Stroem logo" />
                            <p>Som medlem af Elinstallatørernes Landsorganisation, ELFO, er vi tilsluttet et ankernævn og en garantiordning.</p>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Link</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQ</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Om os</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Kontakt os</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Services</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Kontakt os</h5>
                            <address className='m-1'>Adresse:  {data.address}</address>
                            <p className='m-1'>Telefon:  {data.phone}</p>
                            <p className='m-1'>Email:  {data.email}</p>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Nyhedsbrev</h5>
                                <p>Tilmeld dig vores nyhedsbrev her</p>
                                <div className="d-flex flex-column flex-sm-row w-50 gap-2">
                                    <label htmlFor="newsletter" className="visually-hidden">Email address</label>
                                    <input id="newsletter" type="text" className="form-control" placeholder="Din Email" />
                                    <button className="btn btn-primary" type="button">Tilmeld</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>Strøm © 2017 All Right Reserved</p>
                        {data && data.some && data.some.map((d) =>
                            <div key={d._id}>
                                <p>{d.icon}</p>
                            </div>
                        )}
                    </div>
                </footer>
            }
        </>
    )



}

export default Footer;