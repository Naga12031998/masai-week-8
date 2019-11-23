import React from 'react'

//react-router-dom
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                        <img src={"data:image/jpeg;base64,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"} style={{ height: 30, width: 30 }} className="mr-2" alt="."></img>
                        <p className="navbar-brand">eat.fit</p>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to='/eatnow' className="nav-link">Eat Now</Link>
                                <Link to='/eatlater' className="nav-item nav-link">Eat Later</Link>
                                <Link to='/subscribe' className="nav-item nav-link">Subscribe</Link>
                                <Link to='/create' className="nav-item nav-link">Create</Link>
                            </div>
                        </div>
                        <form className="form-inline">
                            <img src="https://image.flaticon.com/icons/svg/1000/1000997.svg" style={{ width: 30, height: 30, marginLeft: 10 }} alt='.'></img>
                            <p className="nav-item nav-link">Login</p>
                            <img src="https://image.flaticon.com/icons/svg/60/60992.svg" style={{ width: 30, height: 30, marginLeft: 10 }} alt='.'></img>
                        </form>
                    </nav>
                    <div>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/9ed49723-8b0f-4e69-bbcd-bce8abfa54f2.jpg" className="d-block w-100" alt="Carousel_1" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/b34254a7-e44d-42eb-8f36-2c4b0aef4f02.jpg" className="d-block w-100" alt="Carousel_2" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/0933da27-bb2a-4405-8bf9-740e4049c4f8.jpg" className="d-block w-100" alt="Carousel_3" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/9e5ebf18-94bf-409d-8ec6-3a0efbbd6bb9.jpg" className="d-block w-100" alt="Carousel_4" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/97ed2555-3462-465e-b341-1a97ff67829d.jpg" className="d-block w-100" alt="Carousel_5" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/600d8623-a2b4-41c9-88ba-da655602ce1d.png" className="d-block w-100" alt="Carousel_6" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/aedcf0ae-980f-41b6-82fd-8bf1f1634ffb.png" className="d-block w-100" alt="Carousel_7" />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/eff18d70-b621-4c48-8954-ff9febf777d8.jpg" className="d-block w-100" alt="Carousel_7" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default Navbar;