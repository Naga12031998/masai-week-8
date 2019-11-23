import React from 'react'

//react router-dom
import { Route, BrowserRouter } from "react-router-dom";

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'
import Create from './components/Create'
import Eatnow from './components/eatnow';
import View from './components/View'
import Viewlater from './components/Viewlater'
import Eatlater from './components/eatlater';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
           <div>
                <div >
                    <BrowserRouter>
                        <Navbar />
                        <Route path="/eatnow" exact component={Eatnow}></Route>
                        <Route path="/eatnow/:id" render={(props) => <View {...props} />} />
                        <Route path="/eatlater" component={Eatlater}></Route>
                        <Route path="/viewlater/:id" render={(props) => <Viewlater {...props} />} />
                        <Route path="/subscribe" component={Subscribe}></Route>
                        <Route path="/create" component={Create}></Route>
                        <Footer />
                    </BrowserRouter>
                </div>
           </div>
        )
    }
}

export default App