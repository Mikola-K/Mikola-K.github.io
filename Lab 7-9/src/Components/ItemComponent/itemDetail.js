
import React, { Component } from 'react';
import Header from '../HomeComponent/Header/header'
import Footer from '../HomeComponent/Footer/Footer'

class ItemDetail extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            records: []
        };
      };
    componentWillMount() {
        this.itemViewMore(this.state.id);
    }
    itemViewMore = (id) => {
        id -= 1
        const axios = require('axios').default;
        axios.get('/api/get/' + id)
        .then((response) => {
          console.log("responde", response.data)
          this.setState({
            records: response.data,
          });
        })
      }
  render() {
    return (
      <div >
        <Header/>
         <div>
            <li className="car__card">
                    <h2 className="tile-section__title">{this.state.records.title}</h2>
                    <h1 className="tile-section__subtitle">{this.state.records.description}</h1>
                    <h1 >{this.state.records.power} lc</h1>
                    <h1 >{this.state.records.speed} km</h1>
            </li>
        </div>
        <Footer/>
      </div >
    )
}
}
export default ItemDetail
