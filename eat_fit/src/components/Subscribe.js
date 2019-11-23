import React from 'react'

class Subscribe extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        alert(`${this.state.email} is Subscribed now, You will get instant notifications`)
        this.setState({
            email:''
        })
    }

    render() {
        return(
            <div className="container">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit" onClick={this.handleClick} className="btn btn-primary mb-3">Submit</button>
                </form>
            </div>
        )
    }
}

export default Subscribe;