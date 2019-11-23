import React from 'react'

//axios
import Axios from 'axios'

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            food: '',
            Createdfood: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeFood = this.handleChangeFood.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleChangePrice(event) {
        this.setState({ price: event.target.value });
    }

    handleChangeFood(event) {
        this.setState({ food: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        let userDetails = {
            name: this.state.name,
            food: this.state.food,
            price: this.state.price
        }
        Axios.post('http://127.0.0.1:5000/create', userDetails)
            .then(response => {
                console.log(response)
            })
            .catch(error => { console.log(error) })
        this.setState({
            name: '',
            price: '',
            food: ''
        })
    }

    handleClick = (event) => {
        event.preventDefault()
        console.log('Clicked')
        Axios.get('http://127.0.0.1:5000/addedfood')
            .then(res => {
                this.setState({
                    Createdfood: res.data
                })
            })
    }

    render() {
        return (
            <div className="text-center mt-4">
                <form onSubmit={this.handleSubmit}>
                    <div className="card container" style={{width : "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Add Your food here</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="input-group flex-nowrap">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="addon-wrapping"></span>
                                    </div>
                                    <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control" placeholder="Restaurant Name" aria-label="Username" aria-describedby="addon-wrapping"/>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="input-group flex-nowrap">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="addon-wrapping"></span>
                                    </div>
                                    <input type="text" value={this.state.food} onChange={this.handleChangeFood} className="form-control" placeholder="Dish" aria-label="Username" aria-describedby="addon-wrapping"/>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="input-group flex-nowrap">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="addon-wrapping"></span>
                                    </div>
                                    <input type="text" value={this.state.price} onChange={this.handleChangePrice} className="form-control" placeholder="Price" aria-label="Username" aria-describedby="addon-wrapping"/>
                                </div>
                            </li>
                        </ul>
                        <div className="card-body">
                            <button className="btn btn-warning" onSubmit={this.handleSubmit}>Add</button>
                            <button className="btn btn-warning ml-3" onClick={this.handleClick}>See Added food </button>
                        </div>
                    </div>
                </form>
                <div>
                    <div>
                        {this.state.Createdfood.map(item => {
                            return (
                                <div className="card container mt-5" >
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"><b>Restaurant: </b>{item.name}</li>
                                        <li className="list-group-item"><b>Dish Name: </b>{item.food}</li>
                                        <li className="list-group-item"><b>Alloted Price: </b>{item.price}</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
