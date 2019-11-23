import React from 'react'

//axios
import Axios from 'axios';

//React-router-dom
import { Link } from 'react-router-dom'

class Eatlater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        }
    }

    componentDidMount() {
        Axios.get('http://127.0.0.1:5000/eatlater')
            .then(response => {
                this.setState({
                    restaurants: response.data.data
                })
                // console.log(response)
            })
    }

    render() {
        return (
            <div className="row mt-3 text-center">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Restaurants</th>
                                <th scope="col">View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.restaurants.map((e, id) => {
                                return (
                                    <tr >
                                        <td>{e.name}</td>
                                        <td><Link to={`/viewlater/${id}`}>View Restaurant</Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Eatlater;