import React from 'react';

class NavbarBlog extends React.Component {
	componentDidMount() {
		setTimeout(function () {
			document.querySelector(".loader-wrapper").style = "display: none";
		}, 2000);
	}
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light theme-nav fixed-top">
				<div className="container">
					<a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}><img src="assets/images/logo.png" alt="logo" /></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse default-nav" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto" id="mymenu">
							<li className="nav-item">
								<a className="nav-link" href={`${process.env.PUBLIC_URL}/home-one#home`}>Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={`${process.env.PUBLIC_URL}/home-one#about`}>about</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={`${process.env.PUBLIC_URL}/home-one#feature`}>feature</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={`${process.env.PUBLIC_URL}/home-one#screenshot`}>screenshot</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={`${process.env.PUBLIC_URL}/home-one#team`}>team</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#blog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">blog</a>
								<ul className="dropdown-menu">
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-list`} target="_blank">blog list</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-details`} target="_blank">blog details</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-leftside`} target="_blank">leftsidebar</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-rightside`} target="_blank">rightsidebar</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-left-sidebar`} target="_blank">details leftsidebar</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/blog-right-sidebar`} target="_blank">details rightsidebar</a></li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={`${process.env.PUBLIC_URL}/home-one#price`} data-menuanchor="price">price</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href={`${process.env.PUBLIC_URL}/home-one#contact`} data-menuanchor="contact">contact us</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other page</a>
								<ul className="dropdown-menu">
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/sign-in`} target="_blank">sign in</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/sign-up`} target="_blank">sign up</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/forget-password`} target="_blank">Forget Password</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/thank-you`} target="_blank">Thank you</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/review`} target="_blank">Review</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/404`} target="_blank">404</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/faq`} target="_blank">FAQ</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/download`} target="_blank">Download</a></li>
									<li className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/coming-soon`} target="_blank">Coming Soon</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavbarBlog;