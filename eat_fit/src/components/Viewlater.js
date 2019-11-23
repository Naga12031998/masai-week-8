import React from 'react'

//axios
import Axios from 'axios';
import LineChart from './LineChart'

class Viewlater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item1 : '',
            item2 : '',
            item3 : '',
            item4 : '',
            time : '',
            restaurantDetails: []
        }
    }

    componentDidMount() {
        var restaurantId = this.props.match.params.id
        Axios.get('http://127.0.0.1:5000/eatlater', restaurantId)
            .then(res => {
                this.setState({
                    restaurantDetails: res.data.data[restaurantId]
                })
            })
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.history.push(`/eatlater`)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        console.log(this.state.restaurantDetails)
        return (
            <div>
                <div className="row mt-3">
                    <div className="col-sm-6">
                        <div className="card">
                        <div className="card-body">
                            <img src={this.state.restaurantDetails.img} className="card-img-top" style={{width:256, height:208}} alt="..."/>
                            <h5 className="card-title">{this.state.restaurantDetails.name}</h5>
                            <p className="card-text">Rating: {this.state.restaurantDetails.rating}</p>
                            <p className="card-text">Best In: {this.state.restaurantDetails.bestin}</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-title">No. of orders taken today in swiggy: {this.state.restaurantDetails.swiggy}</p>
                                <p className="card-title">No. of Orders taken today in zomato: {this.state.restaurantDetails.zomato}</p>
                                <p className="card-title">No. of Orders taken today in uber eats: {this.state.restaurantDetails.uber_eats}</p>                            
                                <h4>Order Your Items</h4>                            
                                <p className="card-text">{this.state.restaurantDetails.item1}<input name="item1" value={this.state.item1} onChange={this.handleChange} className="ml-5" type="number" placeholder={`quantity / ${this.state.restaurantDetails.cost1}-each`}></input></p>
                                <p className="card-text">{this.state.restaurantDetails.item2}<input name="item2" value={this.state.item2} onChange={this.handleChange} className="ml-5" type="number" placeholder={`quantity / ${this.state.restaurantDetails.cost2}-each`}></input></p>
                                <p className="card-text">{this.state.restaurantDetails.item3}<input name="item3" value={this.state.item3} onChange={this.handleChange} className="ml-5" type="number" placeholder={`quantity / ${this.state.restaurantDetails.cost3}-each`}></input></p>
                                <p className="card-text">{this.state.restaurantDetails.item4}<input name="item4" value={this.state.item4} onChange={this.handleChange} className="ml-5" type="number" placeholder={`quantity / ${this.state.restaurantDetails.cost4}-each`}></input></p>
                                <h4>When are you going to have your food? </h4>
                                <input name="time" value={this.state.time} onChange={this.handleChange} placeholder="00:00 hrs"></input><br/>                           
                                <button type="button" className="btn btn-primary mt-2" data-toggle="modal" data-target="#exampleModal" data-placement="right" title="Order">
                                    Order
                                </button>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h3 className="modal-title" id="exampleModalLabel">
                                                    Total: {this.state.item1*this.state.restaurantDetails.cost1 + this.state.item2*this.state.restaurantDetails.cost2 + this.state.item3*this.state.restaurantDetails.cost3 + this.state.item4*this.state.restaurantDetails.cost4}
                                                </h3>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <h5>{this.state.restaurantDetails.item1}: {this.state.item1*this.state.restaurantDetails.cost1}</h5><br/>
                                                <h5>{this.state.restaurantDetails.item2}: {this.state.item2*this.state.restaurantDetails.cost2}</h5><br/>
                                                <h5>{this.state.restaurantDetails.item3}: {this.state.item3*this.state.restaurantDetails.cost3}</h5><br/>
                                                <h5>{this.state.restaurantDetails.item4}:{ this.state.item4*this.state.restaurantDetails.cost4}</h5><br/>
                                                <h5>Your Order Will be delivered at : {this.state.time}</h5>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                                <button type="button" onClick={this.handleClick} className="btn btn-primary" data-dismiss="modal">Confirm Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <LineChart />
                </div>
            </div>
            )
        }
    }
        
export default Viewlater