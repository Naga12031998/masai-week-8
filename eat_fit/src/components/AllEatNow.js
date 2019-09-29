import React from 'react'
import { Link } from "react-router-dom";

const AllEatNow = props => {
    console.log(props);
    return (
      <React.Fragment>
          <div className="container text-center mt-3">
            <h3>Order Now and Enjoy Your Food</h3>
            <h2 className="font-weight-bold "> Restaurants </h2>
            <div>
            {props.eatNowArr.map(element => {
                return (
                <div key={element.id} className="border-bottom">
                    <h6 className="mt-3"> Name : {element.name} </h6>
                    <Link className = "btn btn-info mb-3" to={`${props.match.url}/${element.id}`}>
                    Click to see Restaurant{" "}
                    </Link>
                </div>
                );
            })}
            </div>
        </div>
      </React.Fragment>
    );
  };
  

export default AllEatNow;