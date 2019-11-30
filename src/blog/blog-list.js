import React from 'react';
import Navbar from '../components/navbarblog';

class BlogList extends React.Component {
	componentDidMount() {
		setTimeout(function () {
			document.querySelector(".loader-wrapper").style = "display: none";
		}, 2000);
	}
	render() {
		return (
			<div>
				<Navbar />
				<div className="page-margin">

					{/*breadcrumb start*/}
					<div className="breadcrumb-bg">
						<div className="container">
							<div className="row">
								<div className="col-md-6 col-sm-6 col-text-center d-align-center">
									<h2 className="title"><span> Blog</span></h2>
								</div>
								<div className="col-md-6 col-sm-6 col-text-center">
									<nav aria-label="breadcrumb" className="blog-bradcrumb ">
										<ol className="breadcrumb bg-transparent mb-0">
											<li className="breadcrumb-item"><a href="/">Home</a></li>
											<li className="breadcrumb-item active"><a href={null}>Blog</a></li>
										</ol>
									</nav>
								</div>
							</div>
						</div>
					</div>
					{/*breadcrumb end*/}

					{/*blog Section start*/}
					<section>
						<div className="container">
							<div className="row">
								<div className="col-sm-12">
									<div className="row blog-list">
										<div className="col-md-6">
											<div className="blog-item">
												<div className="blog-block">
													<div className="blog-box">
														<div className="overflow-hidden"><a href="blog-details"><img src="assets/images/blog/blog3.jpg" alt="blog" className="img-fluid" /></a></div>
													</div>
												</div>
												<div className="blog-text">
													<a href="blog-details">
														<h3>There are many variations of passages.</h3>
														<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem . Typesetting Industry. Lorem  Typesetting Indust.</p>
													</a>
													<h5>Mark jkcno</h5>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="blog-item">
												<div className="blog-block">
													<div className="blog-box">
														<div className="overflow-hidden"><a href="blog-details"><img src="assets/images/blog/6.jpg" alt="blog" className="img-fluid" /></a></div>
													</div>
												</div>
												<div className="blog-text">
													<a href="blog-details">
														<h3>There are many variations of passages.</h3>
														<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem . Typesetting Industry. Lorem  Typesetting Indust.</p>
													</a>
													<h5>Mark jkcno</h5>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="blog-item">
												<div className="blog-block">
													<div className="blog-box">
														<div className="overflow-hidden"><a href="blog-details"><img src="assets/images/blog/7.jpg" alt="blog" className="img-fluid" /></a></div>
													</div>
												</div>
												<div className="blog-text">
													<a href="blog-details">
														<h3>There are many variations of passages.</h3>
														<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem . Typesetting Industry. Lorem  Typesetting Indust.</p>
													</a>
													<h5>Mark jkcno</h5>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="blog-item">
												<div className="blog-block">
													<div className="blog-box">
														<div className="overflow-hidden"><a href="blog-details"><img src="assets/images/blog/8.jpg" alt="blog" className="img-fluid" /></a></div>
													</div>
												</div>
												<div className="blog-text">
													<a href="blog-details">
														<h3>There are many variations of passages.</h3>
														<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem . Typesetting Industry. Lorem  Typesetting Indust.</p>
													</a>
													<h5>Mark jkcno</h5>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="blog-item">
												<div className="blog-block">
													<div className="blog-box">
														<div className="overflow-hidden"><a href="blog-details"><img src="assets/images/blog/9.jpg" alt="blog" className="img-fluid" /></a></div>
													</div>
												</div>
												<div className="blog-text">
													<a href="blog-details">
														<h3>There are many variations of passages.</h3>
														<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem . Typesetting Industry. Lorem  Typesetting Indust.</p>
													</a>
													<h5>Mark jkcno</h5>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="blog-item">
												<div className="blog-block">
													<div className="blog-box">
														<div className="overflow-hidden"><a href="blog-details"><img src="assets/images/blog/10.jpg" alt="blog" className="img-fluid" /></a></div>
													</div>
												</div>
												<div className="blog-text">
													<a href="blog-details">
														<h3>There are many variations of passages.</h3>
														<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem . Typesetting Industry. Lorem  Typesetting Indust.</p>
													</a>
													<h5>Mark jkcno</h5>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/*paginations*/}
								<div className="col-md-12">
									<nav aria-label="Page navigation" className="blog-pagination">
										<ul className="pagination justify-content-center blog-pagin">
											<li className="page-item">
												<a className="page-link" href={null} aria-label="Previous">
													<i className="fa fa-angle-left" aria-hidden="true"></i>
												</a>
											</li>
											<li className="page-item active"><a className="page-link" href={null}>1</a></li>
											<li className="page-item"><a className="page-link" href={null}>2</a></li>
											<li className="page-item"><a className="page-link" href={null}>3</a></li>
											<li className="page-item">
												<a className="page-link" href={null} aria-label="Next">
													<i className="fa fa-angle-right" aria-hidden="true"></i>
												</a>
											</li>
										</ul>
									</nav>
								</div>
								{/*paginations end*/}
							</div>
						</div>
					</section>
					{/*blog Section End*/}

					{/*Footer Section start*/}
					<div className="bg-light">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="copyright-section">
										<p>2018- 19 Copyright &copy; powered by Company name</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*Footer Section End*/}
				</div>
			</div>
		);
	}
}

export default BlogList;