import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class Team extends React.Component {
   componentDidMount() {
      setTimeout(function () {
         document.querySelector(".loader-wrapper").style = "display: none";
      }, 2000);
   }
   render() {
      // OwlCarousel Option for Team Members
      const options = {
         0: {
            items: 1,
            margin: 5,
         },
         600: {
            items: 1,
            margin: 5,
         },
         768: {
            items: 2,
         },
         992: {
            items: 3,
         },
         1000: {
            items: 3,
         }
      };

      // Dynamic Team Members Easy to Update
      let data = [
         { name: 'mark jkcno', designation: 'designer', photo: '1.jpg', facebook: '#', google: '#', twitter: '#', instagram: '#', rss: '#' },
         { name: 'john doe', designation: 'devloper', photo: '15.jpg', facebook: '#', google: '#', twitter: '#', instagram: '#', rss: '#' },
         { name: 'johanson let', designation: 'ux designer', photo: '22.jpg', facebook: '#', google: '#', twitter: '#', instagram: '#', rss: '#' },
         { name: 'Walo Boni', designation: 'app devloper', photo: '1.jpg', facebook: '#', google: '#', twitter: '#', instagram: '#', rss: '#' },
         { name: 'John Shipmen', designation: 'app designer', photo: '22.jpg', facebook: '#', google: '#', twitter: '#', instagram: '#', rss: '#' },
         { name: 'Robert Tomkins', designation: 'ceo', photo: '15.jpg', facebook: '#', google: '#', twitter: '#', instagram: '#', rss: '#' },
      ];

      // Dynamic Team Members Data Loop
      let DataList = data.map((val, i) => {
         return (
            <div className="team-item" key={i}>
               <div className="team-block">
                  <div className="team-box">
                     <div className="team-avtar">
                        <img src={`assets/images/avtar/${val.photo}`} alt="" />
                     </div>
                     <div className="team-text">
                        <h3>{val.name}</h3>
                        <h6>{val.designation}</h6>
                     </div>
                     <div className="overlay">
                        <ul className="team-social">
                           <li><a href={val.facebook}><i className="fa fa-facebook"></i></a></li>
                           <li><a href={val.google}><i className="fa fa-google-plus"></i></a></li>
                           <li><a href={val.twitter}><i className="fa fa-twitter"></i></a></li>
                           <li><a href={val.instagram}><i className="fa fa-instagram"></i></a></li>
                           <li><a href={val.rss}><i className="fa fa-rss"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         );
      });

      return (
         <section id="team" className="team">
            <div className="team-decor">
               <div className="team-circle1"><img src="assets/images/team1.png" alt="" /></div>
               <div className="team-circle2"><img src="assets/images/team3.png" alt="" /></div>
               <div className="team-circle3"><img src="assets/images/team.png" alt="" /></div>
            </div>
            <div className="container">
               <div className="row ">
                  <div className="col-sm-12">
                     <h2 className="title">our <span>smart team</span></h2>
                  </div>
                  <div className="col-sm-12">
                     <div>
                        <OwlCarousel
                           className="team-carousel owl-carousel owl-theme"
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
            </div>
         </section>
      );
   }
}


export default Team;