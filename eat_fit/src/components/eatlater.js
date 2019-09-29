import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import AllEatLater from './AllEatLater'
import LineChart from './LineChart';

const eatLaterArr = [{name: "Absolute Barbecue Pvt Ltd",best:"South Indian Dishes", rating: "***", id: "rugantino", url:"https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "Raj Rasoil",best:"North Indian Dishes", rating: "*****", id: "courtyard",url:"https://images.unsplash.com/photo-1484156818044-c040038b0719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "Bareerah Multicuisine Restaurnts",best:"Fried Rices", rating: "***", id: "andre",url:"https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "Naidu Palace",best:"Noodles", rating:"*****", id: "greek-taverna",url:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "Melt", rating:"**",best:"Upma", id:"viscor",url:"https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "Vishal", rating:"****",best:"Gopi Manchurians", id:"goodfellow",url:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "Somilan Steak House",best:"Noodles", rating:"****", id:"ask",url:"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "Hyderbad biriyani house",best:"Fried rices", rating:"***", id:"fountain-inn",url:"https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "The Sahar Pavilion",best:"Schewarma", rating:"*****", id:"wookey-hole",url:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "Daawat E Pirates ", best:"Veg Roles",rating:"***", id:"upper-milton",url:"https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},];

const EatLater = props => {
    console.log(props);
        const eatLaterArrObj = eatLaterArr.find(
            element => element.id == props.match.params.id
        );
        if (eatLaterArr) {
            return (
                <React.Fragment>
                    <div style={{ border: "1px solid black" }} className="text-center">
                        <h1> {eatLaterArrObj.name} </h1>
                        <h3> Ratings : {eatLaterArrObj.rating} </h3>
                        <img className="rounded" src={eatLaterArrObj.url} style={{width:650, height:400}}></img><br />
                        {/* <Link to='/eatlater/sales-report' className="btn border border-success mb-3 mt-3 text-success">Sales report</Link> */}
                        <h1 className="mt-3 text-danger">Best In: {eatLaterArrObj.best}</h1>
                        <button type="button" className="btn btn-outline-success mb-3">ORDER</button>
                        <h1 className="border-bottom"></h1>
                        <Route to='/eatlater/sales-report' component={LineChart}></Route>
                    </div>
                </React.Fragment>
            );
        } 
        else {
            return (
                <React.Fragment>
                    <h1 className="text-danger text-center"> 404, Product not found, invalid id </h1>
                </React.Fragment>
            );
        }
};

class EatLaterCategory extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <React.Fragment>
                    <Route
                        path="/eatlater/:id"
                        render={props => <EatLater {...props} />}
                    />
                    <Route
                        path="/eatlater"
                        render={props => {
                            console.log(props);
                            return <AllEatLater eatLaterArr={eatLaterArr} {...props} />;
                        }}
                    />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default EatLaterCategory;