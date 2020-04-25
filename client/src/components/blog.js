import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class Blog extends React.Component {
   componentDidMount() {
      setTimeout(function () {
         document.querySelector(".loader-wrapper").style = "display: none";
      }, 2000);
   }
   render() {
      // OwlCarousel Option for Blogs
      const options = {
         0: {
            items: 1,
            dots: true,
            margin: 5,
         },
         600: {
            items: 1,
            dots: true,
            margin: 0,
         },
         768: {
            items: 2,
            dots: true,
         },
         992: {
            items: 3,
         },
         1000: {
            items: 2
         }
      };

      // Dynamic Blog Data Easy to Update
      let data = [
         { title: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.', link: 'blog-details', date: '28 December 2017', photo: '9.jpg', username: 'Wala Boni', hits: '10', comments: '15' },
         { title: 'Lorem Ipsum has been the industry standard dummy text.', link: 'blog-details', date: '15 jun 2016', photo: '6.jpg', username: 'johanson let', hits: '15', comments: '30' },
         { title: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary', link: 'blog-details', date: '10 February 2012', photo: '7.jpg', username: 'John Shipmen', hits: '6', comments: '8' },
         { title: 'The first line of Lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32.', link: 'blog-details', date: '12 march 2015', photo: '8.jpg', username: 'Mark jkcno', hits: '10', comments: '50' },
      ];

      // Dynamic Blog Data Loop
      let DataList = data.map((val, i) => {
         return (
            <div className="blog-item" key={i}>
               <div className="blog-block">
                  <div className="blog-box">
                     <div className="overflow-hidden"><a href={val.link}><img src={`assets/images/blog/${val.photo}`} alt="" /></a></div>
                  </div>
               </div>
               <div className="blog-text">
                  <h6>{val.date}</h6>
                  <a href={val.link}>
                     <h3>{val.title}</h3>
                  </a>
                  <h5>posted by {val.username}, {val.hits} hits, {val.comments} comment</h5>
               </div>
            </div>
         );
      });

      return (
         <section id="blog" className="blog">
            <div className="about-decor">
               <div className="about-circle1"><img src="assets/images/team1.png" alt="" /></div>
               <div className="about-circle2"><img src="assets/images/main-banner1.png" alt="" /></div>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <h2 className="title">latest <span>blog</span></h2>
                  </div>
                  <div className="col-sm-12">
                     <OwlCarousel
                        className="blog-carousel owl-carousel owl-theme"
                        loop={true}
                        margin={30}
                        nav={false}
                        dots={true}
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


export default Blog;