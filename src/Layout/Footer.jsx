import { React, useEffect } from 'react';
import Error from '../components/Error';
import Loader from '../components/Loader';
import '../SASS/General.scss';
import {FaTwitter, FaVimeo, FaLinkedin, FaFacebook} from 'react-icons/fa'


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
                <footer class="py-5">
                    <div class="row">
                        <div class="col-6 col-md-2 mb-3">
                            <img src="./logo-2.png" alt="Stroem logo" />
                            <p>Som medlem af Elinstallatørernes Landsorganisation, ELFO, er vi tilsluttet et ankernævn og en garantiordning.</p>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <h5>Link</h5>
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQ</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Om os</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Kontakt os</a></li>
                                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Services</a></li>
                            </ul>
                        </div>

                        <div class="col-6 col-md-2 mb-3">
                            <h5>Kontakt os</h5>
                            <address className='m-1'>Adresse:  {data.address}</address>
                            <p className='m-1'>Telefon:  {data.phone}</p>
                            <p className='m-1'>Email:  {data.email}</p>
                        </div>

                        <div class="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Nyhedsbrev</h5>
                                <p>Tilmeld dig vores nyhedsbrev her</p>
                                <div class="d-flex flex-column flex-sm-row w-50 gap-2">
                                    <label for="newsletter" class="visually-hidden">Email address</label>
                                    <input id="newsletter" type="text" class="form-control" placeholder="Din Email" />
                                    <button class="btn btn-primary" type="button">Tilmeld</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>Strøm © 2017 All Right Reserved</p>
                        {data && data.some && data.some.map((d)=>
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