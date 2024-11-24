import AboutMainImage from "../assets/Image/AboutMainImage.jpg"
import apj from "../assets/Image/apj.jpg";
import BillGates from "../assets/Image/billGates.jpg"
import HomeLayout from "../Layouts/HomeLayout";
function AboutUS(){
    return (
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-black bg-gray-800">
                 <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                         <h1 className="text-5xl text-yellow-500 font-semibold">Affordable and quality education</h1>
                         <p className="text-xl text-gray-200">
                            Our goal is to provide the affordable and quality education to the world.
                            We are providing the platform for the aspiring teacher and students to share
                            their skills, creativity and knowledge to each other to empower and contribute
                             in the growth and wellness of mankind.
                         </p>
                    </section>
                    <div className="w-1/2">
                       <img 
                         id="test1"
                          style={
                           { filter: "drop-shadow(0px 10px 10px rgb(0,0,0))"}
                          }
                         className="drop-shadow-2xl" src={AboutMainImage} alt="Image" 
                       />
                    </div>
                 </div>
                  
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                        src={apj}
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                        src={BillGates}
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default AboutUS;