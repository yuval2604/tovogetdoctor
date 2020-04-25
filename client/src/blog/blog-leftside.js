import React from 'react';
import Navbar from '../components/navbarblog';

class BlogLeftside extends React.Component {
	componentDidMount() {
		setTimeout(function () {
			document.querySelector(".loader-wrapper").style = "display: none";
		}, 2000);
	}
	render() {
		return (
			<div>
				<Navbar />
				{/*blog Section start*/}
				<div className="page-margin">
					{/*breadcrumb start*/}
					<div className="breadcrumb-bg">
						<div className="container">
							<div className="row">
								<div className="col-md-6 col-sm-6 col-text-center d-align-center">
									<h2 className="title">Left<span> Sidebar</span></h2>
								</div>
								<div className="col-md-6 col-sm-6 col-text-center">
									<nav aria-label="breadcrumb" className="blog-bradcrumb ">
										<ol className="breadcrumb bg-transparent mb-0">
											<li className="breadcrumb-item"><a href="/">Home</a></li>
											<li className="breadcrumb-item"><a href="/blog-list">Blog</a></li>
											<li className="breadcrumb-item active"><a href={null}>Left Sidebar</a></li>
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
								<div className="col-md-8 col-lg-9 blog-sec">
									<div className="row blog-list">
										<div className="col-lg-6 col-md-12">
											<div className="blog-item">
												<div className="blog-block">
													<div className="blog-box">
														<div className="overflow-hidden"><a href="blog-details"><img src="assets/images/blog/blog3.jpg" alt="blog" className="img-fluid" /></a></div>
													</div>
												</div>
												<div className="blog-text">
													<a href="blog-details">
														<h3>There are many variations of passages.</h3>
														<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>
													</a>
													<h5>Mark jkcno</h5>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-md-12">
											<div className="blog-item">
												<div className="blog-block">
													<div className="blog-box">
														<div className="overflow-hidden"><a href="blog-details"><img src="assets/images/blog/6.jpg" alt="blog" className="img-fluid" /></a></div>
													</div>
												</div>
												<div className="blog-text">
													<a href="blog-details">
														<h3>There are many variations of passages.</h3>
														<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>
													</a>
													<h5>Mark jkcno</h5>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-md-12">
											<div className="blog-item">
												<div className="blog-block">
													<div className="blog-box">
														<div className="overflow-hidden"><a href="blog-details"><img src="assets/images/blog/7.jpg" alt="blog" className="img-fluid" /></a></div>
													</div>
												</div>
												<div className="blog-text">
													<a href="blog-details">
														<h3>There are many variations of passages.</h3>
														<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>
													</a>
													<h5>Mark jkcno</h5>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-md-12">
											<div className="blog-item">
												<div className="blog-block">
													<div className="blog-box">
														<div className="overflow-hidden"><a href="blog-details"><img src="assets/images/blog/8.jpg" alt="blog" className="img-fluid" /></a></div>
													</div>
												</div>
												<div className="blog-text">
													<a href="blog-details">
														<h3>There are many variations of passages.</h3>
														<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>
													</a>
													<h5>Mark jkcno</h5>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-md-12">
											<div className="blog-item">
												<div className="blog-block">
													<div className="blog-box">
														<div className="overflow-hidden"><a href="blog-details"><img src="assets/images/blog/9.jpg" alt="blog" className="img-fluid" /></a></div>
													</div>
												</div>
												<div className="blog-text">
													<a href="blog-details">
														<h3>There are many variations of passages.</h3>
														<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>
													</a>
													<h5>Mark jkcno</h5>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-md-12">
											<div className="blog-item">
												<div className="blog-block">
													<div className="blog-box">
														<div className="overflow-hidden"><a href="blog-details"><img src="assets/images/blog/9.jpg" alt="blog" className="img-fluid" /></a></div>
													</div>
												</div>
												<div className="blog-text">
													<a href="blog-details">
														<h3>There are many variations of passages.</h3>
														<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry Lorem .</p>
													</a>
													<h5>Mark jkcno</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/*sidebar section*/}
								<div className="col-md-4 col-lg-3 order-md-first list-sidebar">
									<div className="sidebar">
										<div className="sidebar-space">
											<h4 className="blog-title">blog Category</h4>
											<div className="blog-divider"></div>
											<div className="blog-cat-detail">
												<ul>
													<li className="marg-15">
														<a href="blog-details">
															<i className="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum is simply
			                                        </a>
													</li>
													<li className="marg-15">
														<a href="blog-details">
															<i className="fa fa-angle-right" aria-hidden="true"></i> There Are Many Variations
			                                        </a>
													</li>
													<li className="marg-15">
														<a href="blog-details">
															<i className="fa fa-angle-right" aria-hidden="true"></i> it has survived not only five
			                                        </a>
													</li>
													<li className="marg-15">
														<a href="blog-details">
															<i className="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum has been the.
			                                        </a>
													</li>
													<li className="marg-15">
														<a href="blog-details">
															<i className="fa fa-angle-right" aria-hidden="true"></i> Lorem Ipsum is random.
			                                        </a>
													</li>
												</ul>
											</div>
										</div>
										<div className="sidebar-space">
											<h4 className="blog-title">Popular Tag</h4>
											<div className="blog-divider"></div>
											<div className="tags marg-20">
												<a href={null}><span className="badge badge-theme">Responsive design</span></a>
												<a href={null}><span className="badge badge-theme">Color options</span></a>
												<a href={null}><span className="badge badge-theme">Multiple demos</span></a>
												<a href={null}><span className="badge badge-theme">Dedicated support</span></a>
												<a href={null}><span className="badge badge-theme">Documentation</span></a>
												<a href={null}><span className="badge badge-theme">PSD is included</span></a>
												<a href={null}><span className="badge badge-theme">Text</span></a>
												<a href={null}><span className="badge badge-theme">Support</span></a>
												<a href={null}><span className="badge badge-theme">Responsive</span></a>
												<a href={null}><span className="badge badge-theme">Design</span></a>
											</div>
										</div>
										<h4 className="blog-title">Recent Post</h4>
										<div className="blog-divider"></div>
										<div className="recent-blog marg-20">
											<div className="media">
												<img className="mr-3" src="assets/images/blog/1.jpg" alt="blog" />
												<div className="media-body">
													<a href="blog-details">
														<h5 className="mt-0">Lorem Ipsum Is Simply Dummy</h5>
													</a>
													<p className="m-0">05 March 2011</p>
												</div>
											</div>
											<div className="media">
												<img className="mr-3" src="assets/images/blog/2.jpg" alt="blog" />
												<div className="media-body">
													<a href="blog-details">
														<h5 className="mt-0">Lorem Ipsum has been the</h5>
													</a>
													<p className="m-0">14 january 2015</p>
												</div>
											</div>
											<div className="media">
												<img className="mr-3" src="assets/images/blog/3.jpg" alt="blog" />
												<div className="media-body">
													<a href="blog-details">
														<h5 className="mt-0">all the Lorem Ipsum Generator</h5>
													</a>
													<p className="m-0">30 November 2015</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/*sidebar section*/}
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
				{/*blog Section end*/}
			</div>
		);
	}
}

export default BlogLeftside;