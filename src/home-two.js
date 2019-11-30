import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Feature from './components/feature';
import ScreenShot from './components/screenshot';
import Team from './components/team';
import Blog from './components/blog';
import Price from './components/price';
import Testimonial from './components/testimonial';
import Contact from './components/contact';
import Subscribe from './components/subscribe';
import Footer from './components/footer';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import Tilt from 'react-tilt';

class HomeTwo extends React.Component {
	constructor () {
	    super()
	    this.state = {
	      isOpen: false
	    }
	    this.openModal = this.openModal.bind(this)
	}

	openModal () {
	    this.setState({isOpen: true})
	}
	
	componentDidMount() {
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }

  render() {
  	document.body.classList.remove('landing-page');
	document.body.classList.remove('home-style');
  	document.body.classList.remove('three');
  	document.body.classList.add('home-style-two');
  	return (
  		<div>
  			{/* Navbar Component*/}
  			<Navbar />

  			{/* Home Two Section Start */}
  			<section id="home"  className="home home-two vertical-scrolling">
			   <div className="container">
			      <div className="row">
			         <div className="col-md-5 col-sm-12">
			            <div className="home-contain">
			               <div className="text-white">
			                  <div className="contain">
			                  <img src="assets/images/home2/logo-icon.png" alt="logo" />
			                  <h4 >Landing page for</h4>
			                  <h1 className="text-white">t<span className="f-bold ">o</span>v<span className="f-bold ">o</span>
			                     <span className="f-bold f-color text-white">app</span>
			                  </h1>
			                  <p className="slide-cap-desc">Enhance your business ideas with Powerful, Responsive, Elegant TOVO Theme.</p>
			                  <a href={null}><img src="assets/images/appstore.png" alt="appstore" className="store" /></a>
			                  <a href={null}><img className="ml-10 store" src="assets/images/play-store.png" alt="play-store" /></a>
			                  </div>
			                  <div className="play-button">
			                  	<ModalVideo channel='vimeo' isOpen={this.state.isOpen} videoId='54298665' height={600} width={800} onClose={() => this.setState({isOpen: false})} />
			                  	 <a className="popup-vimeo animated-circle" >
			                  		<img src="assets/images/home2/play-button.png" alt="play-button" onClick={this.openModal} className="img-fluid" />
			                     </a>
			                  </div>
			               </div>
			            </div>
			         </div>
			         <div className="col-sm-7">
			            <div className="home-right">
			            	<Tilt options={{ perspective: 110, speed: 400, max: 1.2, scale:1 }}>
			               		<img data-tilt data-tilt-perspective="110" data-tilt-speed="400" data-tilt-max="1.2" src="assets/images/home2/slider-caption.png" className="img-fluid" alt="slider-caption" />
			               	</Tilt>
			            </div>
			         </div>
			      </div>
			   </div>
			</section>
			{/* Home Two Section End */}

			{/* About Component*/}
			<About />

			{/*Feature Component*/}
			<Feature />

			{/*ScreenShot Component*/}
			<ScreenShot />

			{/*Team Component*/}
			<Team />

			{/*Blog Component*/}
			<Blog />

			{/*Price Component*/}
			<Price />
			
			{/*Testimonial Component*/}
			<Testimonial />
			
			{/*Contact Component*/}
			<Contact />

			{/*Subscription Component*/}
			<Subscribe />

			{/*Footer Component*/}
			<Footer />
  		</div>
  	);
  }
}

export default HomeTwo;