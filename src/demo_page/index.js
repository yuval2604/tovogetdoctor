import React from 'react';
import Demo from './components/demo';
import Blog from './components/blog';
import Features from './components/feature';
import Tilt from 'react-tilt';

class App extends React.Component {

	componentDidMount() {
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
	}
	
  render() {

  	let demos = [
  		{lable: 'Demo 1', link:'home-one', imgUrl:'url(assets/images/demo/index.jpg)'},
  		{lable: 'Demo 2', link:'home-two', imgUrl:'url(assets/images/demo/index-2.jpg)'},
  		{lable: 'Demo 3', link:'home-three', imgUrl:'url(assets/images/demo/index-3.jpg)'}
	  	];

  	let blogs = [
  		{lable: 'BLOG-DETAILS 1', link:'blog-list', imgUrl:'url(assets/images/demo/blog.jpg)'},
  		{lable: 'BLOG-DETAILS 2', link:'blog-details', imgUrl:'url(assets/images/demo/blog-details.jpg)'},
  		{lable: 'BLOG-DETAILS 3', link:'blog-leftside', imgUrl:'url(assets/images/demo/blogs-leftside.jpg)'},
  		{lable: 'BLOG-DETAILS 4', link:'blog-rightside', imgUrl:'url(assets/images/demo/blogs-rightside.jpg)'},
  		{lable: 'BLOG-DETAILS 5', link:'blog-left-sidebar', imgUrl:'url(assets/images/demo/blog-details-with-leftsidebar.jpg)'},
  		{lable: 'BLOG-DETAILS 6', link:'blog-right-sidebar', imgUrl:'url(assets/images/demo/blog-details-with-rightsidebar.jpg)'},
  		{lable: 'SIGN IN', link:'sign-in', imgUrl:'url(assets/images/demo/sign-in.png)'},
  		{lable: 'SIGN UP', link:'sign-up', imgUrl:'url(assets/images/demo/sign-up.png)'},
  		{lable: 'FORGET PASSWORD', link:'forget-password', imgUrl:'url(assets/images/demo/forget-pwd.png)'},
  		{lable: 'THANK YOU', link:'thank-you', imgUrl:'url(assets/images/demo/thank-you.png)'},
  		{lable: 'REVIEW', link:'review', imgUrl:'url(assets/images/demo/review.png)'},
  		{lable: '404 NOT PAGE', link:'404', imgUrl:'url(assets/images/demo/404.png)'},
  		{lable: 'FAQ PAGE', link:'faq', imgUrl:'url(assets/images/demo/faq.png)'},
  		{lable: 'DOWNLOAD PAGE', link:'download', imgUrl:'url(assets/images/demo/download.png)'},
  		{lable: 'COMING SOON PAGE', link:'coming-soon', imgUrl:'url(assets/images/demo/coming-soon.png)'},
  	];

  	let features = [
  		{lable:'REACT', imgUrl:'assets/images/features/react.png'},
  		{lable:'CSS 3', imgUrl:'assets/images/features/css-3.png'},
  		{lable:'BOOTSTRAP 4', imgUrl:'assets/images/features/bootstrap-4.png'},
  		{lable:'ANIMATE CSS', imgUrl:'assets/images/features/animate-css.png'},
  		{lable:'RESPONSIVE', imgUrl:'assets/images/features/responsive.png'},
  		{lable:'MULTIPLE BLOG LAYOUTS', imgUrl:'assets/images/features/multiple-blog-layouts.png'},
  		{lable:'ONE PAGE LAYOUT', imgUrl:'assets/images/features/fullpage-js.png'},
  		{lable:'THREE TYPE HOME PAGE', imgUrl:'assets/images/features/three-type-home-page.png'},
  		{lable:'COLOR MANAGEMENT', imgUrl:'assets/images/features/color-management.png'},
  		{lable:'GOOGLE FONTS SUPPORT', imgUrl:'assets/images/features/google-fonts-support.png'},
  		{lable:'W3C VALIDATION', imgUrl:'assets/images/features/w3c-validation.png'},
  		{lable:'SOCIAL LINKS', imgUrl:'assets/images/features/social-links.png'},
  		{lable:'GOOGLE MAP', imgUrl:'assets/images/features/google-map.png'},
  		{lable:'PIXEL PERFECT DESIGN', imgUrl:'assets/images/features/pixel-perfect-design.png'},
  		{lable:'ALL BROWSER SUPPORT', imgUrl:'assets/images/features/all-broweser-support.png'},
  		{lable:'TYPOGRAPHY', imgUrl:'assets/images/features/typography.png'},
  	];

  	var x = document.getElementById("theme");
  	x.style.display = "none";

  	return (
  		<div>
  		{/*home section*/}
  		<section className="back-img ">
	      <div className="landing-circle">
	          <div className="landing-circle1"><img  src="assets/images/main-banner3.png" alt="" /></div>
	          <div className="landing-circle2"><img src="assets/images/main-banner12.png" alt="" /></div>
	          <div className="landing-circle3"><img src="assets/images/main-banner1.png" alt="" /></div>
	        </div>
	      <div className="container-fluid">
	        <div className="row">
	          <div className="col-md-6 col-xl-3 offset-xl-2">
	            <div className="home-contain">
	              <div className="fadeInLeft-land-caption">
	                <img src="assets/images/landing-logo.png" alt="logo" className="main-logo" />
	                <p className="landing-caption">Amazing Landing page with <span>Easy Customization</span></p>
	              </div>
	            </div>
	          </div>
	          <div className="col-md-6 col-xl-6 offset-xl-1 sm-d-none">
	            <div className="home-contain fadeIn-mac">
	            	<Tilt options={{ perspective: 110, speed: 400, max: 1.2, scale:1 }}>
	              		<img src="assets/images/mac.png" alt="mac" className="img-fluid" />
	              	</Tilt>
	            </div>
	          </div>
	          </div>
	        </div>
	    </section>
	    {/*home section end*/}

	    {/*home demo section*/}
    	<Demo demos={demos}></Demo>
    	{/*home demo section end*/}

    	{/*other page section*/}
	    <Blog blogs={blogs}></Blog>
	    {/*other page section end*/}

	    {/*main feature section*/}
	    <Features features={features}></Features>
	    {/*main feature section end*/}

	    {/*template section*/}
	    <section className="template-bg pb-0 m-0">
	      <div className="container m-width">
	        <div className="row">
	          <div className="col-xl-5 offset-xl-1 col-md-6 ">
	            <div className="tamp-d-flex">
	              <div className="center-sm ">
	                <h2 className="tapl-title fadeInLeft-land-caption">Stop thinking, Just grab it</h2>
	                <a href={null}  className="btn btn-custom theme-color rounded-5 fade-button">Download</a>
	              </div>
	            </div>
	          </div>
	          <div className="col-xl-5 offset-xl-1 col-md-6 ">
	            <div className="garb-img">
	              <a href="main/index.html"><img src="assets/images/landing/template.png" alt="template" className="img-fluid" /></a>
	            </div>
	          </div>
	        </div>
	      </div>
	    </section>
	    {/*template section end*/}

	    {/*Rate template section*/}
	    <section>
	      <div className="container-fluid">
	        <div className="row">
	          <div className="col-md-12 text-center">
	            <div className="tamp-d-flex">
	              <div>
	                <p className="coming-title rating-title">If you love this template please rate us</p>
	                <div className="rating-star">
	                  <img src="assets/images/star.png" alt="star" />
	                  <img src="assets/images/star.png" alt="star" />
	                  <img src="assets/images/star.png" alt="star" />
	                  <img src="assets/images/star.png" alt="star" />
	                  <img src="assets/images/star.png" alt="star" />
	                </div>
	              </div>
	            </div>
	          </div>          
	        </div>
	      </div>
	    </section>
	    {/*Rate template section end*/}

	   </div>
  	);
  }
}

export default App;