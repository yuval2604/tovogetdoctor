import React from 'react';


class Demo extends React.Component {
	componentDidMount() {
		setTimeout(function () {
			document.querySelector(".loader-wrapper").style = "display: none";
		}, 2000);
	}
	render() {
		// Getting Dynamic Demo Pages Data
		let DataList = this.props.demos.map((val, i) => {
			return (
				<div className="col-xl-4 col-lg-6 col-12 text-center" key={i}>
					<div key={i}>
						<a href={val.link} target="_blank" key={i}>
							<span className="pc-bg" key={i}>
								<span style={{ backgroundImage: val.imgUrl }} key={i} className="img-scroll"></span>
							</span>
						</a>
					</div>
					<h2 className="demo-title">{val.lable} </h2>
				</div>
			);
		});

		return (
			<section className="fadinup" id="home-demo">
				<div className="container-fluid m-width">
					<div className="row">
						<div className="col-md-12">
							<h2 className="landing-title">choose demo</h2>
							<div className="border-shape"></div>
						</div>
						<div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1">
							<p className="demo-description">Clean and clear designs makes websites differ from others. We've pre-build demo for giving you as much as flexibility in making your site unique.</p>
						</div>
					</div>
					<div className="row mt-35 landing-screen-animation">
						{DataList}
					</div>
				</div>
			</section>
		);
	}
}

export default Demo;
