import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Error from '../components/Error';
import Loader from '../components/Loader';
import '../SASS/General.scss';
import { FaTwitter, FaVimeo, FaLinkedin, FaFacebook } from 'react-icons/fa'


//Import eget hook - som laver request til API
import useGetData from '../hooks/useGetData';
import usePostData from '../hooks/usePostData';

const Footer = () => {
    
    //request-hook
    const { error, loading, data, getData } = useGetData();
    const { error: errorPost, loading: loadingPost, data: dataPost, postData } = usePostData();

    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();

        let fd = new FormData(e.target)

        // You can add logic here to send the email to your server or API for subscription
        postData("http://localhost:5333/newssubscription/", fd)

        try {
            // Send email to your server or API for subscription
            postData("http://localhost:5333/newssubscription/", fd);

            // Subscription successful
            setIsSubscribed(true);

            setTimeout(() => {
                setIsSubscribed(false);
            }, 2000);

        } catch (error) {
            console.error("Error subscribing to newsletter:", error);
        }
    };

    useEffect(() => {

        getData("http://localhost:5333/contactinformation"
        )


    }, [])

    return (
        <>

            {/*Error*/}
            {error && errorPost && <Error />}

            {/*Loading*/}
            {loading && loadingPost && <Loader />}

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
                                <Link to="/faq" className="nav-foot-item mb-2 text-decoration-none">&#x3E; FAQ</Link>
                                <Link to="/aboutus" className="nav-foot-item mb-2 text-decoration-none">&#x3E; Om os</Link>
                                <Link to="/contact" className="nav-foot-item mb-2 text-decoration-none">&#x3E; Kontakt os</Link>
                                <Link to="/service" className="nav-foot-item mb-2 text-decoration-none">&#x3E; Services</Link>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Kontakt os</h5>
                            <address className='m-1'>Adresse:  {data.address}</address>
                            <p className='m-1'>Telefon:  {data.phone}</p>
                            <p className='m-1'>Email:  {data.email}</p>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form onSubmit={handleSubscribe}>
                                <h5>Nyhedsbrev</h5>
                                <p>Tilmeld dig vores nyhedsbrev her</p>
                                <div className="d-flex flex-column flex-sm-row w-50 gap-2">
                                    <label htmlFor="newsletter" className="visually-hidden">Email address</label>
                                    <input type="email" name="email" id="email" placeholder='Din email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <button className="btn btn-primary" type="submit" disabled={isSubscribed} >Tilmeld</button>
                                </div>
                            </form>
                            {isSubscribed && (
                                <div className="alert alert-success mt-3">
                                    Subscribed to newsletter
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>Strøm © 2017 All Right Reserved</p>
                        {data && data.some && data.some.map((d) =>
                            <div key={d._id}>
                                <span>{"fa " + d.icon}</span>
                            </div>
                        )}
                    </div>
                </footer>
            }
        </>
    )



}

export default Footer;