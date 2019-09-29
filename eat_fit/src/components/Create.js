import React from 'react' 

export default class Create extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',
                    price:'',
                    food:'',
                   arr:[]
                   };
      this.handleChange = this.handleChange.bind(this);
      this.handleChangePrice = this.handleChangePrice.bind(this);
      this.handleChangeFood = this.handleChangeFood.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({name: event.target.value});
    }

    handleChangePrice(event) {
      this.setState({price: event.target.value});
    }

    handleChangeFood(event) {
        this.setState({food:event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const data={name:this.state.name, price:this.state.price, food:this.state.food}
        //alert('A name was submitted: ' + this.state.value);
        //console.log(data)
        const ar=[]
        ar.push(data)
        //console.log(ar)
        this.setState({arr:ar})
    }

    render() {
      console.log(this.state.arr);
      return (
        <div className="text-center">
            <h1>Add Your Dish Here</h1>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleChange} />
                </label><br />
                <label>
                    Food:
                    <input type="text" value={this.state.food} onChange={this.handleChangeFood} />
                </label><br />
                <label>
                    Price:
                    <input type="text" value={this.state.email} onChange={this.handleChangePrice} />
                </label><br />
                <button type="submit" className="btn mb-3 btn-warning" onSubmit={this.handleSubmit}>Add</button>
            </form>
            <div>{this.state.arr.map((val,index)=>{
            console.log(val);
                return(
                <div>
                    <p>Names: {val.name}</p>
                    <p>Dish: {val.food}</p>
                    <p>The Price is: {val.price} /-</p>
                    <h3>Congratulations! Your Dish Has Been Added Successfully</h3>
                </div>
                )})}
           </div>
        </div>
    );}
}
   