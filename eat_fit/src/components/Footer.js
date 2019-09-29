import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div class="card bg-dark text-white">
                    <div class="card-header">
                        <img src={"https://media.glassdoor.com/sqll/1675320/cure-fit-squarelogo-1558695311551.png"} style={{height:30, width: 30}} className="mr-2"></img>
                        eat.fit
                    </div>
                    <div class="card-body">
                        <div className= "row">
                            <div className="col-6">
                                <p><small>At cure.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free. #BeBetterEveryDay</small></p>
                            </div>
                            <div className="col-3">
                                <img src={"https://static.cure.fit/assets/images/app-store.svg"} style={{width:200, height:50}}></img>
                            </div>
                            <div className="col-3">
                                <img src={"https://static.cure.fit/assets/images/play-store.svg"} style={{width:200, height:50}}></img>
                            </div>

                            
                        </div>
                        
                        <div className="bg-secondary text-light">
                            <p className="border-bottom text-left mb-3">POPULAR SEARCHES<br/></p>
                            <div className="row">
                                <div className="col-2">
                                    <small><p>Calorie Counted Diet</p>
                                    <p>Order Breakfast Online</p>
                                    <p>Order Snacks Online</p></small>
                                </div>
                                <div className="col-2">
                                    <small><p>Food Delivery</p>
                                    <p>Order Food Online</p>
                                    <p>Weight Loss Diet</p></small>
                                </div>
                                <div className="col-2">
                                    <small><p>Healthy Diet</p>
                                    <p>Order Food Online</p></small>
                                </div>
                                <div className="col-2">
                                    <small><p>Healthy Lunch</p>
                                    <p>Order Healthy Breakfast</p></small>
                                </div>
                                <div className="col-2">
                                    <small><p>Healthy Meals</p>
                                    <p>Order Healthy Food Online</p></small>
                                </div>
                                <div className="col-2">
                                    <small><p>Healthy Protein Food</p>
                                    <p>Order Lunch Online</p></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-light">
                        <p class="navbar-brand"><small>Contact us</small></p>
                        <p class="navbar-brand"><small>FAQ</small></p>
                        <p class="navbar-brand"><small>Terms & Conditions</small></p>
                        <p class="navbar-brand"><small>Privacy Policy</small></p>
                        <p class="navbar-brand"><small>Refund Policy</small></p>
                        <form class="form-inline">
                            <img src={"https://image.flaticon.com/icons/svg/733/733614.svg"} style={{width:30,height:30}} className="mr-3"></img>
                            <img src={"https://image.flaticon.com/icons/svg/33/33702.svg"} style={{width:30,height:30}} className="mr-3"></img>
                            <img src={"https://image.flaticon.com/icons/svg/60/60580.svg"} style={{width:30,height:30}} className="mr-3"></img>
                            <img src={"https://image.flaticon.com/icons/svg/733/733646.svg"} style={{width:30,height:30}} className="mr-3"></img>
                           
                        </form>
                    </nav>
                    <div class="card-footer text-muted">
                        <small>copyright @ 2019</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;