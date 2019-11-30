import React from 'react';
import Navbar from '../components/navbar';

class Faq extends React.Component {
    componentDidMount() {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }
    render() {

        return (
            <div>
                {/* Navbar Component*/}
                <Navbar />

                {/*blog Section start*/}
                <div className="page-margin">

                    {/*breadcrumb start*/}
                    <div className="breadcrumb-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                                    <h2 className="title"><span>FAQ</span></h2>
                                </div>
                                <div className="col-md-6 col-sm-6 col-text-center">
                                    <nav aria-label="breadcrumb" className="blog-bradcrumb ">
                                        <ol className="breadcrumb bg-transparent mb-0">
                                            <li className="breadcrumb-item"><a href={`${process.env.PUBLIC_URL}/`}>Home</a></li>
                                            <li className="breadcrumb-item active"><a href="">FAQ</a></li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*breadcrumb end*/}


                    {/*sign in*/}
                    <section>
                        <div className="innerpage-decor">
                            <div className="innerpage-circle1"><img src="assets/images/Testimonial2.png" alt="" /></div>
                            <div className="innerpage-circle2"><img src="assets/images/Testimonial1.png" alt="" /></div>
                        </div>
                        {/*faq in*/}
                        <div className="faq">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div id="accordion">
                                            <div className="card border-theme mb-3 radius-0">
                                                <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <a class="">Collapsible Group Item #1 <i className="fa fa-angle-down"></i></a>
                                                </div>

                                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                             </div>
                                                </div>
                                            </div>
                                            <div className="card border-theme mb-3 radius-0">
                                                <div className="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    <a class="" >Collapsible Group Item #2 <i className="fa fa-angle-down"></i></a>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                             </div>
                                                </div>
                                            </div>
                                            <div className="card border-theme mb-3 radius-0">
                                                <div className="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <a class="" >Collapsible Group Item #3 <i className="fa fa-angle-down"></i></a>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                             </div>
                                                </div>
                                            </div>
                                            <div className="card border-theme radius-0">
                                                <div className="card-header" id="headingFour" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    <a class="" >Collapsible Group Item #4 <i className="fa fa-angle-down"></i></a>
                                                </div>
                                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                             </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*faq up*/}
                    </section>
                    {/*sign up*/}

                    {/*Footer Section start*/}
                    <div className="bg-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="copyright-section">
                                        <p>2018- 19 Copyright &copy; powered by Pixel Strap</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Footer Section End*/}
                </div>
                {/*blog Section start*/}
            </div>
        );
    }
}


export default Faq;