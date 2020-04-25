import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class Price extends React.Component {
    componentDidMount() {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }
    render() {
        // OwlCarousel Option for Prices
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
                items: 3
            }
        };

        // Dynamic Price Data Easy to Update
        let data = [
            { title: 'Basic', lable: 'Only the basic features', price: '969', features: '<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>', link: '#' },
            { title: 'Standard', lable: 'Take it to the next level', price: '969', features: '<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>', link: '#' },
            { title: 'Custom', lable: 'Our biggest plan', price: '969', features: '<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>', link: '#' },
        ];

        // Dynamic Price Data Loop
        let DataList = data.map((val, i) => {
            return (
                <div className="price-item" key={i}>
                    <div className="price-block">
                        <div className="price-type">
                            <h2>{val.title}</h2>
                        </div>
                        <div className="mrp">
                            <h6 className="user-type">{val.lable}</h6>
                            <div className="price-devide"></div>
                            <h2>${val.price}</h2>
                            <h6 className="price-year">per year</h6>
                            <div className="price-devide"></div>
                        </div>
                        <ul className="price-feature" dangerouslySetInnerHTML={{ __html: val.features }}></ul>
                        <a href={val.link} className="btn btn-custom theme-color" role="button" >Select Plane</a>
                    </div>
                </div>
            );
        });

        return (
            <section id="price" className="price">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <OwlCarousel
                                className="price-carousel owl-carousel owl-theme"
                                loop={true}
                                margin={30}
                                nav={false}
                                dots={false}
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


export default Price;