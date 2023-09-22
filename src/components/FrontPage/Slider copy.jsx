import { React, useState, useEffect} from 'react';
import Error from '../../components/Error';
import Loader from '../../components/Loader';

//Import eget hook - som laver request til API
import useGetData from '../../hooks/useGetData'


const Slider = () => {

    //request-hook
    const { error, loading, data, getData } = useGetData();

    useEffect(() => {
      getData("http://localhost:5333/images/slider/")
    
    }, [])
    

    const [slideindex, Setslideindex] = useState(1)

    const nextSlide = () => {
        if (slideindex !==2) {
            Setslideindex(slideindex + 1) 
        } else if (slideindex ===2) {
            Setslideindex(0)            
        }
    }
    const prevSlide = () => {
        if (slideindex !==0) {
            Setslideindex(slideindex - 1) 
        } else if (slideindex ===0) {
            Setslideindex(1)            
        }
    }

    return (
        <>
            {/*Error*/}
            {error && <Error />}

            {/*Loading*/}
            {loading && <Loader />}

            {/* Data */}
            {data && data.map((s,index) => {
                return(
                    <div key={s.id} className={data === index + 1 ? "slideactive-anim" : "slide"}>
                        <img src={"http://localhost:5333/images/slider/" + s[index].image} class="d-block w-100" alt="..." />
                    </div>
                )
            }) 
            }
            
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={"http://localhost:5333/images/slider/" + s.image} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./slider/2.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="./slider/3.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider