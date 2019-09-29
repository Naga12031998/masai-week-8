import React from 'react'

class Carousel extends React.Component{
    render(){
        return(
            <div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/9ed49723-8b0f-4e69-bbcd-bce8abfa54f2.jpg" class="d-block w-100" alt="Carousel_1"/>
                         </div>
                        <div class="carousel-item">
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/b34254a7-e44d-42eb-8f36-2c4b0aef4f02.jpg" class="d-block w-100" alt="Carousel_2"/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/0933da27-bb2a-4405-8bf9-740e4049c4f8.jpg" class="d-block w-100" alt="Carousel_3"/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/9e5ebf18-94bf-409d-8ec6-3a0efbbd6bb9.jpg" class="d-block w-100" alt="Carousel_4"/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/97ed2555-3462-465e-b341-1a97ff67829d.jpg" class="d-block w-100" alt="Carousel_5"/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/600d8623-a2b4-41c9-88ba-da655602ce1d.png" class="d-block w-100" alt="Carousel_6"/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/aedcf0ae-980f-41b6-82fd-8bf1f1634ffb.png" class="d-block w-100" alt="Carousel_7"/>
                        </div>
                        <div class="carousel-item">
                            <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_1440,f_auto,ar_2880:595,q_auto:eco/dpr_1/image/vm/eff18d70-b621-4c48-8954-ff9febf777d8.jpg" class="d-block w-100" alt="Carousel_7"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Carousel;