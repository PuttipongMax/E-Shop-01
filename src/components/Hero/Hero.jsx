import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";

const HeroData = [
    {
        id: 1, 
        img: Image1,
        subtitle: "Beats Solo",
        
    }
]

function Hero(){
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true
    }

    return (
        <div>
            <div>{/* Hero section */}

            <Slider { ...settings } >
                
            </Slider>
            </div>
        </div>
    )
}

export default Hero;