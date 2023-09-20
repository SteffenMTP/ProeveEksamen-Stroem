import { React, useEffect, useState } from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import './Service_Front.scss';

//Import eget hook - som laver request til API
import useGetData from '../../hooks/useGetData';
import usePostData from '../../hooks/usePostData';

const Service_Front = () => {

    //request-hook
    const { error, loading, data, getData } = useGetData();
    const { error: errorPost, loading: loadingPost, data: dataPost, postData } = usePostData();

    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    useEffect(() => {

        getData("http://localhost:5333/service"
        )


    }, [])

    //Tøm inputfelt efterpost
    useEffect(() => {
        if (dataPost) {
            document.querySelector("form").reset()
        }
    }, [dataPost])

    //Send data til api
    const handleSubmit = async (e) => {
        e.preventDefault()              //VIGTIG ved submit af form, da den forhindrer siden i at reloade siden

        let fd = new FormData(e.target)

        // Send data to API
        try {
            await postData("http://localhost:5333/booking/", fd);

            // Booking successful, set the state to display the confirmation message
            setBookingConfirmed(true);

            // Automatically hide the message after 5 seconds (5000 milliseconds)
            setTimeout(() => {
                setBookingConfirmed(false);
            }, 5000);

        } catch (error) {
            console.error("Error submitting the booking:", error);
        }
    };



    return (
        <>
            {/*Error*/}
            {error && errorPost && <Error />}

            {/*Loading*/}
            {loading && loadingPost && <Loader />}

            {/*Data*/}
            <h2>Vores Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eisum tempor</p>
            <div className='ServiceContainer d-flex p-5'>
                <div className="row row-cols-2 g-2">
                    {data && data.map((d) =>
                        <div className="col" key={d._id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <h3><span className={"fi " + d.icon}></span> {d.title}</h3>
                                    <p>{d.teaser}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <img src="./about/1.png" className='row' alt="Portrait of a woman, wearing a helmet, in a striped tanktop, with multiple tools in one hand" />
            </div>
            <form onSubmit={handleSubmit} className='BookServiceContainer d-flex justify-content-center mb-5'>
                <h4>Book Service Nu</h4>
                <input type="text" className='mx-2' name="name" id="name" placeholder='Dit Navn' />
                <input type="email" className='mx-2' name="email" id="email" placeholder='Din Email' />
                <input type="text" className='mx-2' name="phone" id="phone" placeholder='Telefon nr.' />
                <input type="submit" className='mx-2 btn btn-primary' value="Send"/>
            </form>
            {/* Display the confirmation message below the form */}
            {bookingConfirmed && (
                <p>Your booking is confirmed!</p>
            )}
        </>
    )
}

export default Service_Front;