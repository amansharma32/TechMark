
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, } from 'swiper/modules';
import image1 from '../assets/Images/1.jpg';
import image3 from '../assets/Images/2.jpg';
import image4 from '../assets/Images/3.jpg';
import image5 from '../assets/Images/3.jpg';
import image6 from '../assets/Images/3.jpg';
import image9 from '../assets/Images/3.jpg';
import image10 from '../assets/Images/3.jpg';
import image11 from '../assets/Images/3.jpg';
import image12 from '../assets/Images/3.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-creative';


import { EffectCreative } from 'swiper/modules';

function LandingPage() {
    const images = [image1, image3, image4, image5, image6, image9, image10, image11, image12];

    return (
        <>


            <div className="main w-full font-['Rejouice-Headline']" >




                <div className="row flex ">
                    <div className=" w-5/12 h-screen p-8 flex flex-col justify-center items-center" >
                        <h1 className="font-semibold text-3xl text-center mb-9 ">
                        Unlock Peak Performance of Your Resources by Working in a Comfortable Environment
                        </h1>
                        <p className="text-left mx-auto text-1xl font-normal">
                        We specialize in designing and manufacturing of a comprehensive range of products including air handling units, air washers, air showers and ducted air coolers. Our innovative solutions ensure superior indoor air quality and comfort across various industries and settings.
                        </p>
                        <div className="flex flex-col lg:flex-row justify-center mt-4">
                            {/* Item 1 */}
                            <div className="w-full lg:w-6/12 h-full flex items-center justify-center lg:justify-start mb-8 lg:mb-0">
                                <div className="w-[9vw] h-[9vw] md:w-[3vw] md:h-[3vw] flex-shrink-0 mr-4">
                                    <img src='' alt="" className=" ml-2 w-full h-full object-cover text-black " />
                                </div>
                                <div className="text-center lg:text-left">
                                    <h1 className="text-2xl font-semibold">DURABILITY</h1>
                                    <p className="text-sm">Lasting 10 Years</p>
                                </div>
                            </div>

                            {/* Item 2 */}
                            <div className="  w-full lg:w-10/12 h-full flex items-center justify-center lg:justify-start">
                                <div className="w-[9vw] h-[9vw] md:w-[3vw] md:h-[3vw] flex-shrink-0 mr-4 lg:ml-7">
                                    <img src='' alt="" className=" ml-2 lg:ml-3 w-full h-full object-cover" />
                                </div>
                                <div className="text-center lg:text-left ">
                                    <h1 className="text-2xl font-semibold">MODERN INTERIOR</h1>
                                    <p className="text-sm">Exclusive 10 Year Warranty</p>
                                </div>
                            </div>

                        </div>
                        <div className="card p-9 flex">

                            <a to='/AboutUs' className=' justify-start bg-[#163C48] text-white text-1xl px-7 py-3 rounded-sm mt-5    '>Read More</a>
                        </div>
                    </div>
                    <div className="w-7/12 h-screen">
                        <div className="w-full h-[50%] ">
                            <Swiper
                                grabCursor={true}
                                effect={'creative'}
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                creativeEffect={{
                                    prev: {
                                        shadow: true,
                                        translate: ['-20%', 0, -1],
                                    },
                                    next: {
                                        translate: ['100%', 0, 0],
                                    },
                                }}
                                speed={2000}
                                modules={[EffectCreative, Autoplay]}
                                className="mySwiper3"
                            >
                                {images.map((imageUrl, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            className="  h-screen w-full object-cover"
                                            src={imageUrl}
                                            alt={`Image ${index + 1}`}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default LandingPage