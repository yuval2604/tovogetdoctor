import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class ScreenShot extends React.Component {

	componentDidMount() {
		setTimeout(function () {
			document.querySelector(".loader-wrapper").style = "display: none";
		}, 2000);
	}
	render() {

		// OwlCarousel Option for Screenshot
		const options = {
			0: {
				items: 2,
			},
			767: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			},
			1200: {
				items: 5
			}
		};

		return (
			<section id="screenshot" className="screenshot padding-top-bottom">
				<div className="screenshot-decor">
					<div className="screenshot-circle1"><img src="assets/images/feature-circle-two.png" alt="feature-circle-two" /></div>
					<div className="screenshot-circle2"><img src="assets/images/feature-circle.png" alt="feature-circle" /></div>
					<div className="screenshot-circle3"><img src="assets/images/main-banner1.png" alt="feature-circle-three" /></div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-12 ">
							<div className="screenshot-contain">
								<img className="mobile-light-left" src="assets/images/light.png" alt="light" />
								<img className="mob-mocup img-fluid" src="assets/images/screenshot-mob.png" alt="screenshot-mob" />
								<img className="mobile-light-right" src="assets/images/light-right.png" alt="light-right" />
								<OwlCarousel
									className="screenshot-carousel owl-carousel owl-theme"
									loop={true}
									margin={30}
									items={5}
									center={true}
									dots={false}
									autoplay={true}
									autoplayTimeout={8000}
									responsive={options}
								>
									<div className="screenshot-item"><img src="assets/images/app/12.jpg" alt="app" /></div>
									<div className="screenshot-item"><img src="assets/images/app/2.jpg" alt="app" /></div>
									<div className="screenshot-item"><img src="assets/images/app/3.jpg" alt="app" /></div>
									<div className="screenshot-item"><img src="assets/images/app/4.jpg" alt="app" /></div>
									<div className="screenshot-item"><img src="assets/images/app/5.jpg" alt="app" /></div>
									<div className="screenshot-item"><img src="assets/images/app/6.jpg" alt="app" /></div>
									<div className="screenshot-item"><img src="assets/images/app/7.jpg" alt="app" /></div>
									<div className="screenshot-item"><img src="assets/images/app/8.jpg" alt="app" /></div>
									<div className="screenshot-item"><img src="assets/images/app/9.jpg" alt="app" /></div>
									<div className="screenshot-item"><img src="assets/images/app/10.jpg" alt="app" /></div>
									<div className="screenshot-item"><img src="assets/images/app/11.jpg" alt="app" /></div>
									<div className="screenshot-item"><img src="assets/images/app/1.jpg" alt="app" /></div>
								</OwlCarousel>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}


export default ScreenShot;