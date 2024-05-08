
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, } from 'swiper/modules';
import image1 from '../assets/Images/10.webp';
import image3 from '../assets/Images/2.jpg';
import image4 from '../assets/Images/3.jpg';
import image5 from '../assets/Images/1.jpg';
import image6 from '../assets/Images/1.jpg';
import image7 from '../assets/Images/1.jpg';
import image9 from '../assets/Images/1.jpg';
import image10 from '../assets/Images/1.jpg';
import image11 from '../assets/Images/1.jpg';
import image12 from '../assets/Images/1.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-creative';


import { EffectCreative } from 'swiper/modules';

function LandingPage() {
    const images = [image1, image3, image4, image5, image6, image7, image9, image10, image11, image12];

    return (
        <>


            <div className="main w-full font-['Rejouice-Headline']" >

                <div className="w-full  h-full ">

                    <div className="w-full h-full row flex flex-col md:flex-row mx-auto my-auto">

                        <div className="lg:h-screen h-auto md:w-5/12 p-8 flex flex-col justify-center items-center"
                            style={{
                                backgroundImage: "url('https://images.pexels.com/photos/7602820/pexels-photo-7602820.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                filter: 'brightness(.9)'
                            }}
                        >
                            <h1 className="font-semibold text-5xl text-center mb-9">
                                Explore The <span className="text-gray-50">Art</span> of Decor
                            </h1>
                            <p className="text-left mx-auto text-1xl font-normal">
                                From the heart of your home to bespoke wardrobes and curated furniture selections, we offer a holistic approach to interior design. Our extensive experience encompasses a wide range of aesthetics, from timeless elegance to contemporary minimalism, ensuring your vision is brought to life with meticulous attention…
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


                        <div className=" h-[40vh] md:h-auto lg:h-screen md:w-7/12 z-0 ">
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
                                            className=" w-full  object-cover object-left"
                                            src={imageUrl}
                                            alt={`Image ${index + 1}`}
                                        />
                                    </SwiperSlide>
                                ))}

                            </Swiper>


                        </div>

                    </div>


                </div>
                <div className="w-full h-auto ">


                    <div className="flex flex-col md:flex-row">

                        {/* Left Section */}
                        <div className="w-full lg:w-5/12 p-4 lg:p-14 h-[40vh] hidden md:block md:h-screen">

                            <div className=" mx-auto my-auto flex rounded_photo w-full h-full rounded-t-full border-double border-8 border-white"
                                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(1)' }}>

                                <div className="hidden md:flex row flex gap-10 relative content-end top-[89%] left-[15%] ">
                                    <div className="w-6/12 h-10">
                                        <div className=" border  border-[#293C3C] h-[18vh] w-[10vw]  flex flex-col justify-center items-center  rounded-xl "
                                            style={{
                                                background: 'linear-gradient(177.9deg, rgba(200, 203, 226, 0.53) 3.6%, rgba(22, 60, 72, 0.72) 105.8%)'
                                            }} >

                                            <img src='' className=' h-11 w-11 mb-2' alt="" />
                                            <h1 className=' text-center text-[3vw] lg:text-3xl  text-white'>
                                                Design
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="w-6/12 h-10">
                                        <div className=" border  border-white h-[18vh] w-[10vw]  flex flex-col items-centerflex justify-center items-center rounded-xl"
                                            style={{
                                                background: 'linear-gradient(177.9deg, rgba(200, 203, 226, 0.53) 3.6%, rgba(22, 60, 72, 0.72) 105.8%)'
                                            }}
                                        >
                                            <img src='' className=' h-11 w-11 mb-2' alt="" />
                                            <h1 className='  text-center text-[3vw] lg:text-3xl  text-white'>
                                                Build
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Right Section */}
                        <div className="w-full lg:w-7/12 h-full md:h-screen flex items-center justify-center">
                            <div className="p-4 lg:p-10">
                                <h1 className="text-4xl lg:text-5xl text-center mb-5">Make Your Dream Space a Reality: <br /> Why Choose Us?</h1>

                                {/* Features List */}
                                <div className="space-y-6  w-full 2xl:w-[70%] xl:text-justify xl:mx-auto">
                                    {/* Feature 1 */}


                                    <div className="flex-col md:flex-row flex justify-center items-center">
                                        <img src='' className="h-12 w-12 mr-3" alt="" />
                                        <div className=' ml-2' >
                                            <h1 className="text-xl lg:text-2xl font-semibold text-center md:text-start">Quality Design</h1>
                                            <p className="text-sm lg:text-base text-gray-500">We turn your vision and lifestyle into a beautiful space you'll love, using premium materials and construction methods.</p>
                                        </div>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="flex-col md:flex-row flex justify-center items-center">
                                        <img src='' className="h-12 w-12 mr-3" alt="" />
                                        <div className=' ml-2'>
                                            <h1 className="text-xl lg:text-2xl font-semibold text-center md:text-start">Team of Experts</h1>
                                            <p className="text-sm lg:text-base text-gray-500">Our passionate and skilled designers bring expertise to every project, creating a space that reflects your unique style and needs.</p>
                                        </div>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="flex-col md:flex-row flex justify-center  items-center">
                                        <img src='' className="h-12 w-12 mr-3" alt="" />
                                        <div className=' ml-2'>
                                            <h1 className="text-xl lg:text-2xl font-semibold text-center md:text-start">Professional Service</h1>
                                            <p className="text-sm lg:text-base text-gray-500">Expect clear communication, thorough planning, and timely execution every step of the way. We stick to your budget and make your space transformation hassle-free.</p>
                                        </div>
                                    </div>

                                    {/* Feature 4 */}
                                    <div className="flex-col md:flex-row flex justify-center  items-center">
                                        <img src='' className="h-12 w-12 mr-3" alt="" />
                                        <div className=' ml-2'>
                                            <h1 className="text-xl lg:text-2xl font-semibold text-center md:text-start">On-time Delivery</h1>
                                            <p className="text-sm lg:text-base text-gray-500">We promise on-time delivery within 6 weeks or less. Your project is our priority, and we're committed to ensuring timely completion.</p>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </>
    )
}

export default LandingPage