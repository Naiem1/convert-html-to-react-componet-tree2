// Import Assets

import Banner from '../../assets/images/banner2.jpg';

import Map from '../../assets/images/mapimg.jpg';
import Image from '../../assets/images/lllll.png';
import CallIcon from '../../assets/icon/calll.png';
import SectionHeader from '../../components/SectionHeader';
import WhyChooseUs from '../../components/WhyChooseUs';
import Service from '../../components/Service';
import Product from '../../components/Product';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// slick
const settings = {
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true
}
 
const feedback = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
  
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 3,
          autoplay: true,
        }
      } 
    ]
 }
 

const HomePage = () => {
  return (
   <div>
      <section className="slider_section">
         <div className="carousel slide banner-main" data-ride="carousel">
            <Slider {...settings} className="carousel-inner">
               <div className="carousel-item active">
                  <img className="first-slide" src={Banner} alt="First slide"/>
                  <div className="container">
                     <div className="carousel-caption relative">
                        <h1>
                           Our <br /> <strong className="black_bold">Latest </strong><br />
                           <strong className="yellow_bold">Product </strong>
                        </h1>
                        <p>
                           It is a long established fact that a r <br />
                           eader will be distracted by the readable content of a page
                        </p>
                        <a  href="#product">see more Products</a>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <img
                     className="second-slide"
                     src={Banner}
                     alt="Second slide"
                  />
                  <div className="container">
                     <div className="carousel-caption relative">
                        <h1>
                           Our <br /> <strong className="black_bold">Latest </strong><br />
                           <strong className="yellow_bold">Product </strong>
                        </h1>
                        <p>
                           It is a long established fact that a r <br />
                           eader will be distracted by the readable content of a page
                        </p>
                        <a  href="#product">see more Products</a>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <img
                     className="third-slide"
                     src={Banner}
                     alt="Third slide"
                  />
                  <div className="container">
                     <div className="carousel-caption relative">
                        <h1>
                           Our <br /> <strong className="black_bold">Latest </strong><br />
                           <strong className="yellow_bold">Product </strong>
                        </h1>
                        <p>
                           It is a long established fact that a r <br />
                           eader will be distracted by the readable content of a page
                        </p>
                        <a  href="#product">see more Products</a>
                     </div>
                  </div>
               </div>
            </Slider>
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
               <i className='fa fa-angle-right'></i>
            </a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
               <i className='fa fa-angle-left'></i>
            </a>   
         </div>
      </section>

      {/* WHY CHOOSE US */}
      {/* Section Header */}
      <SectionHeader
         highlighted='Why'
         strong='Choose Us'
         desc='Fastest repair service with best price!'
      />  
      <WhyChooseUs/>
      
      {/* SERVICE   */}
      <Service/>

      {/* OUR PRODUCTS */}
      <div className="product">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                     <h2>our <strong className="black">products</strong></h2>
                     <span>We package the products with best services to make you a happy customer.</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
        
      <div className="product-bg">
         <Product slice='8'/>
         {/* END OUR PRODUCTS  */}
           

         {/* CLIENT FEEDBACK */}
         <div className="Clients_bg_white">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="title">
                        <h3>What Clients Say?</h3>
                     </div>
                  </div>
               </div>
                 
               <div id="client_slider" className="carousel slide banner_Client" data-ride="carousel">
                  <Slider {...feedback} className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="container">
                           <div className="carousel-caption text-bg">
                              <div className="img_bg">
                                 <i>
                                    <img src={Image} alt="images" />
                                    <span>Jone Due<br /><strong className="date">12/02/2019</strong></span>
                                 </i>
                              </div>   
                              <p>
                                 You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish
                                 I would have thought of it first. I am really satisfied with my first laptop service.<br />
                                 You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought 
                                 of it first. I am
                              </p>    
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="container">
                           <div className="carousel-caption text-bg">
                              <div className="img_bg">
                                 <i>
                                    <img src={Image} alt="images" /><span>Jone Due<br /><strong className="date">12/02/2019</strong></span>
                                 </i>
                              </div>
                              <p>
                                 You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first.
                                 I am really satisfied with my first laptop service.<br />
                                 You guys rock! Thank you for making it painless, pleasant and most of all hassle
                                 free! I wish I would have thought of it first. I am
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="container">
                           <div className="carousel-caption text-bg">
                              <div className="img_bg">
                                 <i>
                                    <img src={Image} alt="images" /><span>Jone Due<br /><strong className="date">12/02/2019</strong></span>
                                 </i>
                              </div>
                              <p>
                                 You guys rock! Thank you for making it painless, pleasant and most of all hassle free!
                                 I wish I would have thought of it first. I am really satisfied with my first laptop service.<br />
                                 You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am
                              </p>
                           </div> 
                        </div>
                     </div>
                  </Slider>
               </div>
            </div>
         </div>
      </div>
      {/* END CLIENT FEEDBACK */} 
        
      <div className="container">
         <div className="yellow_bg">
            <div className="row">
               <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12">
                  <div className="yellow-box">
                     <h3>REQUEST A FREE QUOTE<i><img src={ CallIcon} alt="images"/></i></h3> 
                     <p>Get answers and advice from people you want it from.</p>
                  </div>
               </div>
               <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
                  <div className="yellow-box">
                     <a href="#quite">Get  Quote</a>
                  </div>
               </div>
            </div>
         </div>
      </div>

       {/*=====MAP====== */}
      <div className="container-fluid padi">
         <div className="map">
            <img src={Map} alt="Map img"/>
         </div>
      </div>
      {/* ====/END MAP=====  */}
   </div>
  );
};

export default HomePage;
