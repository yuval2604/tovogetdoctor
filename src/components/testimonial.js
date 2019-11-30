import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class Testimonial extends React.Component {
   componentDidMount() {
      setTimeout(function () {
         document.querySelector(".loader-wrapper").style = "display: none";
      }, 2000);
   }
   render() {
      // OwlCarousel Option for Testimonial
      const options = {
         0: {
            items: 1,
            dots: true,
            nav: false
         },
         600: {
            items: 1,
            dots: true,
            nav: false
         },
         991: {
            items: 1,
            margin: 15,
         },
         1000: {
            items: 1
         }
      };

      // Dynamic Testimonial Easy to Update
      let data = [
         { name: 'mark jkcno', designation: 'designer', photo: '22.jpg', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text.' },
         { name: 'John Shipmen', designation: 'Lead Developer', photo: '15.jpg', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text.' },
         { name: 'Adegoke Yusuff', designation: 'Content Writer', photo: '1.jpg', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. ' },
      ];

      // Dynamic Testimonial Data Loop
      let DataList = data.map((val, i) => {
         return (
            <div className="testimonial-item" key={i}>
               <div className="testimonial-block">
                  <div className="testimonial-avtar">
                     <img src={`assets/images/avtar/${val.photo}`} alt="" />
                  </div>
                  <div className="testimonial-text">
                     <p>{val.description}</p>
                     <h3>{val.name}</h3>
                     <h6>{val.designation}</h6>
                  </div>
               </div>
            </div>
         );
      });

      return (
         <section id="testimonial" className="testimonial">
            <div className="testimonial-decor">
               <div className="testi-circle1"><img src="assets/images/Testimonial2.png" alt="" /></div>
               <div className="testi-circle2"><img src="assets/images/Testimonial1.png" alt="" /></div>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                     <OwlCarousel
                        className="testimonial-carousel owl-carousel owl-theme"
                        loop={true}
                        margin={5}
                        nav={true}
                        navClass={['owl-prev', 'owl-next']}
                        navText={['<img src="assets/images/back.png">', '<img src="assets/images/next.png">']}
                        dots={false}
                        responsive={options}
                     >
                        {DataList}
                     </OwlCarousel>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}


export default Testimonial;