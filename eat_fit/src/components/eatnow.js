import React from 'react'
import { Link, Route, BrowserRouter } from "react-router-dom";
import AllEatNow from './AllEatNow'
// import LineChart from './LineChart'
import LineChart from './LineChart';

const eatNowArr = [{name: "Rugantino Restaurant",best:"Idly, Dosa, Chappathi, Parottas, Pongal, Upma", rating: "***", id: "rugantino", url:"https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "The Courtyard Restaurant", best:"Aalu Parottas,Butter Parottas",rating: "*****", id: "courtyard",url:"https://images.unsplash.com/photo-1556745750-68295fefafc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "Andre's Cafe", best:"Mutton briyani, Chicken briyani, hyderabadi briyani",rating: "***", id: "andre",url:"https://images.unsplash.com/photo-1556742205-e10c9486e506?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "The Greek Taverna", best:"chicken briyani, vada, pongal ,puri",rating:"*****", id: "greek-taverna",url:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "Viscor's Close", best:"parotta's, chenna masala, masala dosa",rating:"**", id:"viscor",url:"https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "GoodFellows", best:"chappathi, butter dosa, pepper idly",rating:"****", id:"goodfellow",url:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "ASK Italina-wells", best:"Idly, Wheat idly, aalu idly",rating:"****", id:"ask",url:"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "The Fountain Inn Gastro",best:"Dosa, pepper fry, dry kuruma", rating:"***", id:"fountain-inn",url:"https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "Wookey Hole", best:"Puri, paddu, ghee roast",rating:"*****", id:"wookey-hole",url:"https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
                    {name: "Upper Milton", best:"Pongals",rating:"***", id:"upper-milton",url:"https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},]

const EatNow = props => {
    console.log(props);
        const eatNowArrObj = eatNowArr.find(
            element => element.id == props.match.params.id
        );
        if (eatNowArr) {
            return (
                <React.Fragment>
                    <div style={{ border: "1px solid black" }} className="text-center">
                        <h1> {eatNowArrObj.name} </h1>
                        <h3> Ratings : {eatNowArrObj.rating} </h3>
                        <img className="rounded" src={eatNowArrObj.url} style={{width:650, height:400}}></img><br />
                        {/* <Link to='/eatnow/sales-report' className="btn border border-success mb-3 mt-3 text-success" >Sales Report</Link> */}
                        {/* <Route to='/eatnow/sales-report' component={LineChart}></Route> */}
                        <h1 className="mt-3 text-danger">Items: {eatNowArrObj.best}</h1>
                        <button type="button" className="btn btn-outline-success mb-3">ORDER</button>
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



class EatNowCategory extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <React.Fragment>
                    <Route
                        path="/eatnow/:id"
                        render={props => <EatNow {...props} />}
                    />
                    <Route
                        path="/eatnow"
                        render={props => {
                            console.log(props);
                            return <AllEatNow eatNowArr={eatNowArr} {...props} />;
                        }}
                    />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default EatNowCategory;